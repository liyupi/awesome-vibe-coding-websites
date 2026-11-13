// Pulls the generated files from vibefather.ai, commits them if anything changed, and publishes a release when a new AI model appears.
// Everything outside .github/ is replaced on every run.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";

const res = await fetch("https://vibefather.ai/api/internal/awesome", {
  headers: { authorization: `Bearer ${process.env.VF_EXPORT_TOKEN}` },
  signal: AbortSignal.timeout(10 * 60_000),
});
if (!res.ok) throw new Error(`export failed: HTTP ${res.status} ${(await res.text()).slice(0, 300)}`);
const { files, manifest } = await res.json();

const readJson = (file, fallback) => (existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : fallback);
const before = { templates: readJson("data/templates.json", []), models: readJson("data/models.json", null) };
const after = { templates: JSON.parse(files["data/templates.json"]), models: JSON.parse(files["data/models.json"]) };

// Guard against a broken export wiping the repository
if (Object.keys(files).length < 20 || !files["README.md"]) throw new Error(`export looks empty: ${Object.keys(files).length} files`);
if (before.templates.length && after.templates.length < before.templates.length * 0.8)
  throw new Error(`refusing to sync: ${after.templates.length} templates, was ${before.templates.length}`);

for (const entry of readdirSync(".")) if (entry !== ".git" && entry !== ".github") rmSync(entry, { recursive: true, force: true });
for (const [file, content] of Object.entries(files)) {
  if (file.startsWith(".github/") || file.includes("..")) continue;
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, content);
}

const run = (cmd, ...args) => execFileSync(cmd, args, { encoding: "utf8" }).trim();
const oldSlugs = new Set(before.templates.map((t) => t.slug));
const newSlugs = new Set(after.templates.map((t) => t.slug));
const added = after.templates.filter((t) => !oldSlugs.has(t.slug));
const removed = before.templates.filter((t) => !newSlugs.has(t.slug));
const oldModels = new Set((before.models ?? []).map((m) => m.slug));
const newModels = before.models ? after.models.filter((m) => !oldModels.has(m.slug)) : [];

const names = (list) => list.slice(0, 3).map((t) => t.title).join(", ") + (list.length > 3 ? ` and ${list.length - 3} more` : "");
const parts = [
  newModels.length ? `New model: ${newModels.map((m) => m.name).join(", ")}` : "",
  added.length ? `Add ${added.length} ${added.length === 1 ? "template" : "templates"}: ${names(added)}` : "",
  removed.length ? `Remove ${removed.length} ${removed.length === 1 ? "template" : "templates"}` : "",
].filter(Boolean);
const message = before.models ? parts.join(" · ") || "Update templates and live demos" : `${manifest.templates} websites built by ${manifest.models.length} AI models`;

run("git", "add", "-A");
if (run("git", "status", "--porcelain")) {
  run("git", "config", "user.name", "github-actions[bot]");
  run("git", "config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com");
  run("git", "commit", "-q", "-m", message);
  run("git", "push", "-q");
  console.log(`committed: ${message}`);
} else {
  console.log("no changes");
}

// First sync: one launch release. Afterwards: one release per model that wasn't there yesterday
const wanted = before.models ? newModels.map((m) => manifest.releases[m.slug]).filter(Boolean) : [manifest.launch];
const existing = new Set(JSON.parse(run("gh", "release", "list", "--limit", "200", "--json", "tagName")).map((r) => r.tagName));
for (const r of wanted) {
  if (existing.has(r.tag)) continue;
  const notes = path.join(os.tmpdir(), `${r.tag}.md`);
  writeFileSync(notes, r.body);
  run("gh", "release", "create", r.tag, "--title", r.title, "--notes-file", notes, "--target", run("git", "rev-parse", "HEAD"));
  console.log(`released: ${r.title}`);
}
