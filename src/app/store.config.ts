import { NgxsModuleOptions } from '@ngxs/store';
import { NgxsDevtoolsOptions } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginOptions } from '@ngxs/logger-plugin';
import { environment } from '@env';

export const OPTIONS_CONFIG: NgxsModuleOptions = {
	developmentMode: !environment.production,
	compatibility: {
		strictContentSecurityPolicy: false
	},
	selectorOptions: {
		suppressErrors: false,
		injectContainerState: false
	}
};

export const DEVTOOLS_REDUX_CONFIG: NgxsDevtoolsOptions = {
    disabled: environment.production
};

export const LOGGER_CONFIG: NgxsLoggerPluginOptions = {
    disabled: environment.production
};
