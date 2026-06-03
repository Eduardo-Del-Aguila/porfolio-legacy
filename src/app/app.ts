import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './core/services/language.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslatePipe],
  templateUrl: 'app.html',
})
export class App  {
  //   private translate = inject(TranslateService);

  //   constructor() {
  //       this.translate.addLangs(['es', 'en']);
  //       this.translate.setFallbackLang('es');
  //       this.translate.use('es');
  // }
}
