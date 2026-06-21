import { ChangeDetectionStrategy, Component, inject, OnInit, signal, AfterViewInit, afterNextRender, viewChild, viewChildren, ElementRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownComponent } from 'ngx-markdown';
import { ProjectsService } from '../../core/services/projects.service';
import { LanguageService } from '../../core/services/language.service';
import { Project } from '../../core/models/project.model';

import { gsap } from 'gsap';


@Component({
  selector: 'app-project-detail',
  imports: [TranslateModule, RouterLink, MarkdownComponent],
  templateUrl: './project-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private projectsService = inject(ProjectsService);
  private languageService = inject(LanguageService);

  readonly lang = this.languageService.language;
  readonly project = signal<Project | null>(null);

   heroImage = viewChild<ElementRef>('heroImage');
   title = viewChild<ElementRef>('title');
   techItems = viewChildren<ElementRef>('techItem');
   liveButton = viewChild<ElementRef>('liveButton');
   divider = viewChild<ElementRef>('divider');
   markdownContainer = viewChild<ElementRef>('markdownContainer');

  constructor() {
    afterNextRender(() => {
      const tl = gsap.timeline({
      });

      tl
        .to(this.heroImage()!.nativeElement, { opacity: 1, scale: 1, duration: 1}, '-=0.4')
        .to(this.title()!.nativeElement, { opacity: 1, y: 0 }, '-=0.4')
        .to(
          this.techItems().map(t => t.nativeElement), { opacity: 1, y: 0, stagger: 0.08 }, '-=0.3')
        .to(this.liveButton()!.nativeElement, { opacity: 1, y: 0 }, '-=0.3')
        .to(this.divider()!.nativeElement, { opacity: 1, duration: 0.4 }, '-=0.2')
        .to(this.markdownContainer()!.nativeElement, { opacity: 1, y: 0 }, '-=0.1');
    });
  }

  AfterViewInit(){

  }


  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.project.set(this.projectsService.getBySlug(slug) ?? null);
    }
  }
}
