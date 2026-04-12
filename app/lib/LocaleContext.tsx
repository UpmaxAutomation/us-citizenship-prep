"use client";

import { createContext, useContext } from "react";
import { DEFAULT_LANGUAGE, LANGUAGES, type LanguageConfig } from "./languages";

/**
 * Locale context threads the active `LanguageConfig` through the tree so that
 * leaf components (VoiceMode, Flashcard, StudyClient, practice-test) can read
 * `bcp47`, `basePath`, etc. without prop drilling.
 *
 * Each route-group layout wraps its children in a `<LocaleProvider code="tr">`.
 * The provider resolves the full `LanguageConfig` on the client side so that
 * non-serializable fields (like `dataLoader`) don't cross the server→client
 * boundary. Routes outside a localized group inherit `DEFAULT_LANGUAGE` (en).
 */
export const LocaleContext = createContext<LanguageConfig>(DEFAULT_LANGUAGE);

export function LocaleProvider({
  code,
  children,
}: {
  code: string;
  children: React.ReactNode;
}) {
  const config = LANGUAGES.find((l) => l.code === code) ?? DEFAULT_LANGUAGE;
  return (
    <LocaleContext.Provider value={config}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LanguageConfig {
  return useContext(LocaleContext);
}
