import { readFileSync } from 'fs';
import { join } from 'path';

export async function loadTranslations(lang) {
  try {
    // Default to 'pl' if lang is not provided or invalid
    const supportedLanguages = ['pl', 'en', 'de']; // Add more languages as needed
    const language = lang && supportedLanguages.includes(lang) ? lang : 'pl';
    // Read JSON file from public/locales/[lang]/translations.json
    const filePath = join(process.cwd(), 'public', 'locales', language, 'translation.json');
    const translations = JSON.parse(readFileSync(filePath, 'utf-8'));
    return translations;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);
    // Fallback to Polish translations
    const fallbackPath = join(process.cwd(), 'public', 'locales', 'pl', 'translations.json');
    const fallback = JSON.parse(readFileSync(fallbackPath, 'utf-8'));
    return fallback;
  }
}

// Utility function to get translation by key
export function t(translations, key) {
  const keys = key.split('.');
  let value = translations;
  for (const k of keys) {
    value = value?.[k];
    if (!value) return key; // Return key if translation is missing
  }
  return value;
}