import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { DEFAULT_LANGUAGE, LANGUAGE_STATE_NAME } from "@app/constants/language.constants";
import { LanguageStateModel } from "@app/models/language.model";
import { SetLanguage } from "./language.actions";

@State<LanguageStateModel>({
    name: LANGUAGE_STATE_NAME,
    defaults: {
        currentLanguageCode: DEFAULT_LANGUAGE
    }
})
@Injectable()
export class LanguageState {
    @Action(SetLanguage)
    setLanguage(ctx: StateContext<LanguageStateModel>, action: SetLanguage) {
        ctx.setState({
            currentLanguageCode: action.languageCode
        });
    }
}
