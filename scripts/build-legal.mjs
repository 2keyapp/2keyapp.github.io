#!/usr/bin/env node
/**
 * Build docs/*.html legal pages from specs/legal/*.md
 * Usage: node scripts/build-legal.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SPECS_LEGAL = path.join(ROOT, "specs", "legal");
const DOCS = path.join(ROOT, "docs");

const shared = JSON.parse(
  fs.readFileSync(path.join(SPECS_LEGAL, "_shared.json"), "utf8")
);

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error("Missing YAML frontmatter");
  const meta = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim();
    meta[key] = val;
  }
  return { meta, body: match[2].trim() };
}

function inlineFormat(text) {
  return text
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function markdownToHtml(md) {
  const lines = md.split(/\r?\n/);
  const out = [];
  let inList = false;

  function closeList() {
    if (inList) {
      out.push("</ul>");
      inList = false;
    }
  }

  for (const line of lines) {
    if (line.startsWith("### ")) {
      closeList();
      out.push(`<h3>${inlineFormat(line.slice(4))}</h3>`);
    } else if (line.startsWith("## ")) {
      closeList();
      out.push(`<h2>${inlineFormat(line.slice(3))}</h2>`);
    } else if (/^- /.test(line)) {
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${inlineFormat(line.slice(2))}</li>`);
    } else if (line.trim() === "") {
      closeList();
    } else {
      closeList();
      out.push(`<p>${inlineFormat(line)}</p>`);
    }
  }
  closeList();
  return out.join("\n");
}

function buildFooterNav(docs, activeOutput) {
  return docs
    .map((d) => {
      const current =
        d.meta.output === activeOutput ? ' aria-current="page"' : "";
      return `<li><a href="${d.meta.output}"${current}>${d.meta.nav_label}</a></li>`;
    })
    .join("\n          ");
}

function renderPage(doc, allDocs) {
  const { meta, body } = doc;
  const disclaimer =
    meta.disclaimer === "short"
      ? shared.disclaimer_short
      : shared.disclaimer_full;
  const canonical = `${shared.canonical_base}/${meta.output}`;
  const content = markdownToHtml(body);
  const footerNav = buildFooterNav(allDocs, meta.output);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${meta.title} — ${shared.site_name}</title>
  <meta name="description" content="${meta.description}">
  <link rel="canonical" href="${canonical}">
  <meta name="theme-color" content="#0a0e17">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/site.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header legal-header">
    <div class="container header-inner">
      <a class="logo" href="/">
        <img src="assets/img/logo.svg" alt="" class="logo-mark" width="32" height="32">
        <span class="logo-wordmark">2key<span>.app</span></span>
      </a>
      <a class="legal-back" href="/">Back to home</a>
    </div>
  </header>

  <main id="main" class="legal-page">
    <div class="container legal-prose">
      <h1>${meta.title}</h1>
      <p class="legal-meta">Last updated: ${shared.last_updated}</p>
      <p class="legal-disclaimer">${disclaimer}</p>

      ${content}
    </div>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <a class="logo" href="/">
          <img src="assets/img/logo.svg" alt="" class="logo-mark" width="32" height="32">
          <span class="logo-wordmark">2key<span>.app</span></span>
        </a>
        <p class="footer-tagline">${shared.footer_tagline}</p>
        <p class="footer-copy">© <span id="year"></span> ${shared.site_name}. All rights reserved.</p>
        <ul class="footer-legal">
          ${footerNav}
        </ul>
      </div>
    </div>
  </footer>

  <script>document.getElementById("year").textContent = new Date().getFullYear();</script>
</body>
</html>
`;
}

const specFiles = fs
  .readdirSync(SPECS_LEGAL)
  .filter((f) => f.endsWith(".md") && f !== "README.md")
  .sort();

const docs = specFiles.map((file) => {
  const raw = fs.readFileSync(path.join(SPECS_LEGAL, file), "utf8");
  const parsed = parseFrontmatter(raw);
  if (!parsed.meta.output || !parsed.meta.title) {
    throw new Error(`${file}: frontmatter requires title and output`);
  }
  return { file, ...parsed };
});

for (const doc of docs) {
  const html = renderPage(doc, docs);
  const outPath = path.join(DOCS, doc.meta.output);
  fs.writeFileSync(outPath, html, "utf8");
  console.log(`Wrote ${path.relative(ROOT, outPath)} from specs/legal/${doc.file}`);
}

console.log(`Done. ${docs.length} legal page(s) generated.`);
