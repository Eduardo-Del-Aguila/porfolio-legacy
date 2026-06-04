import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, inject, PLATFORM_ID, signal, viewChild, viewChildren } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
@Component({
  selector: 'app-certifications-section',
  imports: [],
  templateUrl: './certifications-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificationsSection {

  readonly platformId = inject(PLATFORM_ID);

  readonly container = viewChild.required<ElementRef>('container');
  readonly flair = viewChild.required<ElementRef>('flair');

  constructor() {
    afterNextRender(() => {

      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      gsap.registerPlugin(Draggable, InertiaPlugin);

      Draggable.create(this.flair().nativeElement, {
        bounds: this.container().nativeElement,
        inertia: true
      });

    });
  }


}
