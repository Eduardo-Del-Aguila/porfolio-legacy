import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideTranslateService,  } from '@ngx-translate/core';
import { provideTranslateHttpLoader, } from '@ngx-translate/http-loader';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions()),
    // provideRouter(routes),
    // provideClientHydration(withEventReplay()),
    //para desarrollo usaré esta
    // provideHttpClient(),
    // provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideTranslateService(
      {
        loader: provideTranslateHttpLoader({prefix:"./i18n/", suffix:".json"}),
        //Muy importnte poner el fallbackLang
        fallbackLang: 'es',
        lang: 'es',
      }
      )
    // provideTranslateService(
    //   {
    //     loader: provideTranslateHttpLoader({prefix:"./i18n/", suffix:".json"}),
    //     fallbackLang: 'en',
    //     lang: 'en',
    //   }
    //   )

  ],
};
