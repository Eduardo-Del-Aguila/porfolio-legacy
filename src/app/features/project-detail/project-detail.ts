import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownComponent } from 'ngx-markdown';
import { ProjectsService } from '../../core/services/projects.service';
import { LanguageService } from '../../core/services/language.service';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-detail',
  imports: [TranslateModule, RouterLink, MarkdownComponent],
  templateUrl: './project-detail.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsService);
  private readonly languageService = inject(LanguageService);

  readonly lang = this.languageService.language;
  readonly project = signal<Project | null>(null);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.project.set(this.projectsService.getBySlug(slug) ?? null);
    }
  }
}


