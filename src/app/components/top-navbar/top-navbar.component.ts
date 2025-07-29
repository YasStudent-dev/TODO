import { Store } from '@ngxs/store';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LanguageCodeOption } from '@app/models/language.model';
import { SetLanguage } from '@app/store/language/language.actions';
import { LanguageSelectors } from '@app/store/language/language.selector';
import { DEFAULT_LANGUAGE, LANGUAGE_OPTIONS } from '@app/constants/language.constants';

@Component({
	selector: 'app-top-navbar',
	templateUrl: './top-navbar.component.html',
	styleUrl: './top-navbar.component.css',
	standalone: true,
	imports: [CommonModule, FormsModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, TranslatePipe]
})
export class TopNavbarComponent {
	public logoPath = "/assets/icon.svg";
	public languageOptions = LANGUAGE_OPTIONS;

	public selectedLanguage!: LanguageCodeOption;
  	private currentLanguage$: Observable<string>;

	private currentLanguageSubscription!: Subscription;

	constructor(private store: Store, private translate: TranslateService) {
		this.currentLanguage$ = this.store.select(LanguageSelectors.selectCurrentLanguageCode);	
	}

	ngOnInit() {
		this.translate.addLangs([...LANGUAGE_OPTIONS]);
		this.translate.setDefaultLang(DEFAULT_LANGUAGE);

		this.currentLanguageSubscription = this.currentLanguage$.subscribe(currentLanguage => {
			this.selectedLanguage = currentLanguage as LanguageCodeOption;
			this.translate.use(this.selectedLanguage);
		});
	}

	ngOnDestroy() {
		if (this.currentLanguageSubscription) {
			this.currentLanguageSubscription.unsubscribe();
		}
	}

	public getLanguageOptionTranslationKey(languageCode: LanguageCodeOption): string {
        return `app.top-navbar.selector.language.options.${languageCode}`;
	}

    public onLanguageChange(): void {
        if (LANGUAGE_OPTIONS.includes(this.selectedLanguage as LanguageCodeOption)) {
            this.store.dispatch(new SetLanguage(this.selectedLanguage as LanguageCodeOption));
        }
    }
}
