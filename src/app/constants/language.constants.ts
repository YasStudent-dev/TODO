import { LanguageCodeOption } from "@app/models/language.model";

export const LANGUAGE_STATE_NAME = 'languageState';

export const LANGUAGE_OPTIONS = ["en", "nl"] as const;

export const DEFAULT_LANGUAGE: LanguageCodeOption = 'en';
