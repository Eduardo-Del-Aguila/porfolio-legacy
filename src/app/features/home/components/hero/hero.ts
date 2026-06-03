import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, PLATFORM_ID, viewChild } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";
import { isPlatformBrowser } from '@angular/common';

import { gsap } from 'gsap';


@Component({
  selector: 'app-hero',
  imports: [TranslatePipe, TranslateDirective, RouterLink],
  templateUrl: './hero.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero implements AfterViewInit {

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

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });


    tl
      .from(this.greeting()?.nativeElement, { opacity: 0, x: -70, duration: 1 })
      .from(this.aboutLabel()?.nativeElement, { opacity: 0, x: 70, duration: 1 }, '<')
      .from(this.photo()?.nativeElement, { opacity: 0, scale: 0.3, duration: 0.7 }, '-=0.4')
      .from(this.bottom()?.nativeElement, { opacity: 0, y: 30, duration: 1 }, '-=0.2');
  }
}
