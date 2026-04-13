import { describe, it, expect } from "vitest";
import {
  getLanguageFromPath,
  toLocalizedPath,
  toCanonicalPath,
  localizeNavHref,
  LANGUAGES,
} from "../languages";

const en = LANGUAGES[0]; // English
const es = LANGUAGES[1]; // Spanish
const tr = LANGUAGES[2]; // Turkish

describe("getLanguageFromPath", () => {
  it("returns English for root path", () => {
    expect(getLanguageFromPath("/").code).toBe("en");
  });

  it("returns English for English routes", () => {
    expect(getLanguageFromPath("/study").code).toBe("en");
    expect(getLanguageFromPath("/questions").code).toBe("en");
  });

  it("returns Spanish for /es paths", () => {
    expect(getLanguageFromPath("/es").code).toBe("es");
    expect(getLanguageFromPath("/es/estudio").code).toBe("es");
    expect(getLanguageFromPath("/es/preguntas").code).toBe("es");
  });

  it("returns Turkish for /tr paths", () => {
    expect(getLanguageFromPath("/tr").code).toBe("tr");
    expect(getLanguageFromPath("/tr/calisma").code).toBe("tr");
  });

  it("returns English for unknown prefixes", () => {
    expect(getLanguageFromPath("/fr/something").code).toBe("en");
  });
});

describe("toLocalizedPath", () => {
  it("returns same path for English", () => {
    expect(toLocalizedPath("/study", en)).toBe("/study");
    expect(toLocalizedPath("/questions", en)).toBe("/questions");
  });

  it("maps known routes to Spanish", () => {
    expect(toLocalizedPath("/", es)).toBe("/es");
    expect(toLocalizedPath("/study", es)).toBe("/es/estudio");
    expect(toLocalizedPath("/questions", es)).toBe("/es/preguntas");
    expect(toLocalizedPath("/practice-test", es)).toBe("/es/examen-de-practica");
  });

  it("maps known routes to Turkish", () => {
    expect(toLocalizedPath("/", tr)).toBe("/tr");
    expect(toLocalizedPath("/study", tr)).toBe("/tr/calisma");
    expect(toLocalizedPath("/questions", tr)).toBe("/tr/sorular");
    expect(toLocalizedPath("/practice-test", tr)).toBe("/tr/deneme-sinavi");
  });

  it("maps child paths of translated routes", () => {
    expect(toLocalizedPath("/questions/some-slug", es)).toBe("/es/preguntas/some-slug");
    expect(toLocalizedPath("/questions/some-slug", tr)).toBe("/tr/sorular/some-slug");
  });

  it("falls back to basePath for untranslated routes", () => {
    expect(toLocalizedPath("/blog", es)).toBe("/es");
    expect(toLocalizedPath("/about", tr)).toBe("/tr");
  });
});

describe("toCanonicalPath", () => {
  it("returns same path for English", () => {
    expect(toCanonicalPath("/study", en)).toBe("/study");
  });

  it("reverses Spanish paths to English", () => {
    expect(toCanonicalPath("/es", es)).toBe("/");
    expect(toCanonicalPath("/es/estudio", es)).toBe("/study");
    expect(toCanonicalPath("/es/preguntas", es)).toBe("/questions");
    expect(toCanonicalPath("/es/examen-de-practica", es)).toBe("/practice-test");
  });

  it("reverses Turkish paths to English", () => {
    expect(toCanonicalPath("/tr", tr)).toBe("/");
    expect(toCanonicalPath("/tr/calisma", tr)).toBe("/study");
    expect(toCanonicalPath("/tr/sorular", tr)).toBe("/questions");
  });

  it("reverses child paths", () => {
    expect(toCanonicalPath("/es/preguntas/some-slug", es)).toBe("/questions/some-slug");
    expect(toCanonicalPath("/tr/sorular/some-slug", tr)).toBe("/questions/some-slug");
  });
});

describe("localizeNavHref", () => {
  it("returns same href for English", () => {
    expect(localizeNavHref("/study", en)).toBe("/study");
    expect(localizeNavHref("/blog", en)).toBe("/blog");
  });

  it("localizes mapped routes for Spanish", () => {
    expect(localizeNavHref("/study", es)).toBe("/es/estudio");
    expect(localizeNavHref("/questions", es)).toBe("/es/preguntas");
    expect(localizeNavHref("/practice-test", es)).toBe("/es/examen-de-practica");
  });

  it("localizes mapped routes for Turkish", () => {
    expect(localizeNavHref("/study", tr)).toBe("/tr/calisma");
    expect(localizeNavHref("/questions", tr)).toBe("/tr/sorular");
  });

  it("keeps untranslated routes as-is (does NOT fall back to basePath)", () => {
    expect(localizeNavHref("/blog", es)).toBe("/blog");
    expect(localizeNavHref("/about", es)).toBe("/about");
    expect(localizeNavHref("/daily-challenge", tr)).toBe("/daily-challenge");
    expect(localizeNavHref("/eligibility-checker", tr)).toBe("/eligibility-checker");
  });

  it("localizes child paths of mapped routes", () => {
    expect(localizeNavHref("/questions/some-slug", es)).toBe("/es/preguntas/some-slug");
    expect(localizeNavHref("/questions/some-slug", tr)).toBe("/tr/sorular/some-slug");
  });

  it("round-trips: toCanonical(localizeNavHref(path)) === path for mapped routes", () => {
    const paths = ["/study", "/questions", "/practice-test"];
    for (const path of paths) {
      const localized = localizeNavHref(path, es);
      expect(toCanonicalPath(localized, es)).toBe(path);
    }
  });
});
