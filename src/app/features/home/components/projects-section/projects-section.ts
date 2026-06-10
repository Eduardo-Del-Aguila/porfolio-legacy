import { afterNextRender, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, input, PLATFORM_ID, viewChildren } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../../../core/models/project.model';
import { ProjectCard } from "../../../../shared/components/project-card/project-card";
import { isPlatformBrowser } from '@angular/common';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-section',
  imports: [TranslatePipe, ProjectCard],
  templateUrl: './projects-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsSection {
  private readonly platformId = inject(PLATFORM_ID);

  readonly projects = input<Project[]>();
  readonly cardWrappers = viewChildren<ElementRef>('cardWrapper');
  readonly sectionHeader = viewChildren<ElementRef>('sectionHeader');


  constructor() {
    afterNextRender(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(this.sectionHeader()[0]?.nativeElement, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.sectionHeader()[0]?.nativeElement,
          start: 'top 105%',
          toggleActions: 'play none none reset',
          // markers: {startColor:"green", endColor:"red", fontSize:"12px"}
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
            markers: {startColor:"yellow", endColor:"blue", fontSize:"12px"}
          },
        }
      );
    });
  }
}
