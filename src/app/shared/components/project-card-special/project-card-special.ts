import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { Project } from '../../../core/models/project.model';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-project-card-special',
  imports: [RouterLink, TranslateModule],
  templateUrl: './project-card-special.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
    :host {
      display: block;
      overflow: hidden;
      width: 100%;
    }
  `]
})
export class ProjectCardSpecial  {
  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.language;
  readonly projects = input.required<Project[]>();
  readonly track = viewChild<ElementRef>('track');

  private tween: gsap.core.Tween | null = null;

  doubled() {
    const p = this.projects();
    return [...p, ...p, ...p];
  }

  constructor() {
    afterNextRender(() => {
      this.initCarousel();
    });
  }

  private initCarousel(): void {
    const el = this.track()?.nativeElement;
    if (!el) return;

    const totalWidth = el.scrollWidth / 3;

    this.tween = gsap.to(el, {
      x: `-=${totalWidth}`,
      duration: this.projects().length * 4,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });
  }

  pause(): void {
    this.tween?.pause();
  }

  resume(): void {
    this.tween?.resume();
  }
}
