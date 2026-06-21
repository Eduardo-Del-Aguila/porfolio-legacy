import { afterNextRender, AfterViewInit, ChangeDetectionStrategy, Component, computed, ElementRef, inject, PLATFORM_ID, signal, viewChild } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";
import { isPlatformBrowser } from '@angular/common';

import { gsap } from 'gsap';
import { LanguageService } from '../../../../core/services/language.service';


@Component({
  selector: 'app-hero',
  imports: [TranslatePipe, TranslateDirective, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly card = viewChild.required<ElementRef>('card');
  readonly content = viewChild<ElementRef>('content');
  readonly bio = viewChild<ElementRef>('bio');

  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.language;




  onMouseMove(event: MouseEvent) {
    const el = this.card().nativeElement;
    const rect = el.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    const intensity = 30;

    gsap.to(el, {
      rotateX: -y * intensity,
      rotateY: x * intensity,
      transformPerspective: 500,
      ease: 'power3.out',
      duration: 0.3,
    });
  }

  onMouseLeave() {
    const el = this.card().nativeElement;

    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      ease: 'power2.out',
      duration: 0.5,
    });
  }

  readonly bioWords = computed(() => {
    let text;
    if(this.lang() == 'en'){
      text = 'Estudiante de ultimos ciclos de la carreara de Ingenieria de sistemas de la información. Futuro google expert developer ;)'.split(' ');
    } else {
      text = 'Estudiante de ultimos cliclos en ingles IM HERE ;)'.split(' ');

    }
    // esto lo resuelve mejor el translate service, pero como ejemplo:
    return text;
  });


  constructor() {
    afterNextRender(() => {

      const tl = gsap.timeline();

      tl
      .fromTo(this.card().nativeElement, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' })
      .fromTo(this.content()!.nativeElement, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4');

    const words = this.bio()!.nativeElement.querySelectorAll('span');

    tl.from(words, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power3.out',
      stagger: 0.03,
    }, '-=0.2');
    });

  }
}
