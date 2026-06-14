import { afterNextRender, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, input, PLATFORM_ID, viewChild, viewChildren } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../../../core/models/project.model';
import { ProjectCard } from "../../../../shared/components/project-card/project-card";
import { isPlatformBrowser } from '@angular/common';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Router } from '@angular/router';
import { ProjectCardSpecial } from "../../../../shared/components/project-card-special/project-card-special";

@Component({
  selector: 'app-projects-section',
  imports: [TranslatePipe, ProjectCard, ProjectCardSpecial],
  templateUrl: './projects-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsSection {
  private readonly platformId = inject(PLATFORM_ID);

  readonly projects = input<Project[]>();
  readonly cardWrappers = viewChildren<ElementRef>('cardWrapper');
  readonly sectionHeader = viewChildren<ElementRef>('sectionHeader');

  readonly pinContainer = viewChild<ElementRef>('pinContainer');
  // readonly sectionHeader = viewChild<ElementRef>('sectionHeader');
  readonly track = viewChild<ElementRef>('track');


  constructor() {
    afterNextRender(() => {
      gsap.registerPlugin(ScrollTrigger);

      const pin = this.pinContainer()!.nativeElement;
      const track = this.track()!.nativeElement;
      // const header = this.sectionHeader()!.nativeElement;

      gsap.to(this.sectionHeader()[0]?.nativeElement, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.sectionHeader()[0]?.nativeElement,
          start: 'top 105%',
          toggleActions: 'play none none reset',
        },
      });

      const trackWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -trackWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => `+=${trackWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.from(
        this.cardWrappers().map(c => c.nativeElement),
        {
          opacity: 0,
          y: 50,
          duration: 1.5,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: this.cardWrappers()[0]?.nativeElement,
            start: 'top 105%',
            toggleActions: 'play none none reset',
          },
        }
      );
    });
  }
}
