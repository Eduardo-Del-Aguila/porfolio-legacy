import { afterNextRender, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, PLATFORM_ID, viewChild } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";
import { isPlatformBrowser } from '@angular/common';

import { gsap } from 'gsap';


@Component({
  selector: 'app-hero',
  imports: [TranslatePipe, TranslateDirective, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {

  private readonly platformId = inject(PLATFORM_ID);

   greeting = viewChild<ElementRef>('greeting');
   photo = viewChild<ElementRef>('photo');
   aboutLabel = viewChild<ElementRef>('aboutLabel');
   bottom = viewChild<ElementRef>('bottom');
   stackSection = viewChild<ElementRef>('stackSection');

  stack = [
    { name: 'C#', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Docker', level: 60 },
  ];


readonly card = viewChild.required<ElementRef>('card');

onMouseMove(event: MouseEvent) {
  const el = this.card().nativeElement;
  const rect = el.getBoundingClientRect();

  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  const intensity = 30;

  gsap.to(el, {
    rotateX: -y * intensity,
    rotateY:  x * intensity,
    transformPerspective: 500,
    ease: 'power3.out',
    duration: 0.3,
  });
}

  onMouseLeave(event: MouseEvent) {
    const el = this.card().nativeElement;

    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      ease: 'power2.out',
      duration: 0.5,
    });
  }
  constructor() {
    afterNextRender(() => {
      const tl = gsap.timeline({
      });

      tl
        .fromTo(this.greeting()!.nativeElement,   {opacity:0, x:-100 },{ opacity: 1, x: 0 }, 'somelabel+=0.5')
        .fromTo(this.aboutLabel()!.nativeElement, {opacity:0, x: 100 },{ opacity: 1, x: 0 },'somelabel+=0.5')
        .fromTo(this.bottom()!.nativeElement,     {opacity:0, y: 40 },{ opacity: 1, y: 0 },'+=0.5');
    });
  }
}
