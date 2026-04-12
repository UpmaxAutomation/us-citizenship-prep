#!/usr/bin/env node
// Parse references/civics_128_tr_okunus.txt into a JSON dict keyed by question id.
// Output is reference-only; never imported by the app. Phonetic style guide for
// Turkish data generation, not a source of truth for answers (PDF lists 1 answer
// per question; canonical English questions have multiple).

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const inPath = resolve(root, "references/civics_128_tr_okunus.txt");
const outPath = resolve(root, "references/civics_128_tr_okunus.json");

const lines = readFileSync(inPath, "utf8").split(/\r?\n/);

const entries = {};
let i = 0;
while (i < lines.length) {
  const m = /^\s*(\d{1,3})\.\s+(.*\S)\s*$/.exec(lines[i]);
  if (!m) { i += 1; continue; }
  const id = Number(m[1]);
  if (id < 1 || id > 128) { i += 1; continue; }

  const qParts = [m[2]];
  let j = i + 1;
  while (j < lines.length && !/^Okunus:/i.test(lines[j].trim())) {
    const t = lines[j].trim();
    if (t) qParts.push(t);
    j += 1;
  }
  if (j >= lines.length) break;

  const okunus = lines[j].replace(/^Okunus:\s*/i, "").trim();
  j += 1;

  let enAnswer = "";
  if (j < lines.length && /^Answer:/i.test(lines[j].trim())) {
    enAnswer = lines[j].replace(/^Answer:\s*/i, "").trim();
    j += 1;
  }

  let trQ = "";
  if (j < lines.length && /^T[uü]rk[cç]e soru:/i.test(lines[j].trim())) {
    trQ = lines[j].replace(/^T[uü]rk[cç]e soru:\s*/i, "").trim();
    j += 1;
  }

  let trA = "";
  if (j < lines.length && /^T[uü]rk[cç]e cevap:/i.test(lines[j].trim())) {
    trA = lines[j].replace(/^T[uü]rk[cç]e cevap:\s*/i, "").trim();
    j += 1;
  }

  const joinedQ = qParts.join(" ").trim();
  entries[id] = {
    en_question: joinedQ.replace(/\s+\*\s*$/, "").trim(),
    is6520: /\*\s*$/.test(joinedQ),
    okunus,
    en_answer: enAnswer,
    tr_q: trQ,
    tr_a: trA,
  };
  i = j;
}

const ids = Object.keys(entries).map(Number).sort((a, b) => a - b);
const missing = [];
for (let k = 1; k <= 128; k += 1) if (!entries[k]) missing.push(k);

writeFileSync(outPath, JSON.stringify(entries, null, 2), "utf8");
console.log(`Parsed ${ids.length}/128 entries to ${outPath}`);
if (missing.length) console.warn(`Missing ids: ${missing.join(", ")}`);
