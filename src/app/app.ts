import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
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

  readonly heroSection = viewChild<ElementRef>('heroSection');

  onSpotlightMove(event: MouseEvent): void {
    const el = this.heroSection()?.nativeElement;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 10;
    const y = ((event.clientY - rect.top) / rect.height) * 10;

    el.style.setProperty('--mouse-x', `${x}%`);
    el.style.setProperty('--mouse-y', `${y}%`);
  }
}
