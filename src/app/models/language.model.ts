import { LANGUAGE_OPTIONS } from '@app/constants/language.constants'

export type LanguageCodeOption = typeof LANGUAGE_OPTIONS[number];

export interface LanguageOption {
    languageCode: LanguageCodeOption;
}

export interface LanguageStateModel {
    currentLanguageCode: LanguageCodeOption;
}
