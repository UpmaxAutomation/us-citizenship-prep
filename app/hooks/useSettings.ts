"use client";

import { useState, useEffect, useCallback } from "react";

interface Settings {
  state: string | null;
  isOnboarded: boolean;
}

const STORAGE_KEY = "us-citizenship-settings";

const defaultSettings: Settings = {
  state: null,
  isOnboarded: false,
};

export function useSettings() {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<Settings>;
        setSettings({
          state: parsed.state ?? null,
          isOnboarded: parsed.isOnboarded ?? false,
        });
      }
    } catch (e) {
      console.error("Failed to load settings:", e);
    }
    setIsLoaded(true);
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error("Failed to save settings:", e);
    }
  }, [settings, isLoaded]);

  const setState = useCallback((abbreviation: string | null) => {
    setSettings((prev) => ({ ...prev, state: abbreviation }));
  }, []);

  const completeOnboarding = useCallback(() => {
    setSettings((prev) => ({ ...prev, isOnboarded: true }));
  }, []);

  return {
    state: settings.state,
    setState,
    isOnboarded: settings.isOnboarded,
    completeOnboarding,
    isLoaded,
  };
}
