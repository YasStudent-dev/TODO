import { NgxsModule } from '@ngxs/store';
import { TodoState } from '@app/store/todo/todo.state';
import { provideHttpClient } from '@angular/common/http';
import { HttpClient, withFetch } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageState } from '@app/store/language/language.state';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { DEFAULT_LANGUAGE, LANGUAGE_STATE_NAME } from '@app/constants/language.constants';
import { TODO_STATE_NAME } from '@app/constants/todo.constants';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) => new TranslateHttpLoader(http, '/i18n/', '.json');

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideHttpClient(withFetch()),
		provideTranslateService({
			loader: {
				provide: TranslateLoader,
				useFactory: httpLoaderFactory,
				deps: [HttpClient]
			},
			defaultLanguage: DEFAULT_LANGUAGE
		}),
		importProvidersFrom(
			NgxsModule.forRoot([TodoState, LanguageState]),
			NgxsStoragePluginModule.forRoot({
				storage: StorageOption.LocalStorage,
				keys: [TODO_STATE_NAME, LANGUAGE_STATE_NAME]
			}),
		)
	]
};
