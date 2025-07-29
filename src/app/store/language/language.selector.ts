import { Selector } from "@ngxs/store";
import { LanguageCodeOption, LanguageStateModel } from "@app/models/language.model";
import { LanguageState } from "./language.state";

export class LanguageSelectors
{
    @Selector([LanguageState])
    static selectCurrentLanguageCode(state: LanguageStateModel): LanguageCodeOption {
        return state.currentLanguageCode;
    }
}
