import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type Language = 'en' | 'es';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly translate = inject(TranslateService);
  private readonly _language = signal<Language>('es');
  readonly language = this._language.asReadonly();

  init(): void {
    this.translate.addLangs(['en', 'es']);
    this.translate.setFallbackLang('en');

    const saved = this.getSavedLanguage();
    this.setLanguage(saved);
  }

  toggle(): void {
    const next: Language = this._language() === 'es' ? 'en' : 'es';
    this.setLanguage(next);
  }

  private setLanguage(lang: Language): void {
    this._language.set(lang);
    this.translate.use(lang);
    this.saveLanguage(lang);
  }

  private getSavedLanguage(): Language {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('lang') as Language;
      if (saved === 'en' || saved === 'es') return saved;
    }
    return 'en';
  }

  private saveLanguage(lang: Language): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }
}
