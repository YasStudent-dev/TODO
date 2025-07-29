import { LanguageCodeOption } from "@app/models/language.model";

export class SetLanguage {
    static readonly type = '[Language] Set language';
    constructor(public languageCode: LanguageCodeOption) {}
}
