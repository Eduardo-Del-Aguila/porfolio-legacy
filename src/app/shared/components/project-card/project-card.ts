import { ChangeDetectionStrategy, Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { Project } from '../../../core/models/project.model';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink, Router } from "@angular/router";

@Component({
  selector: 'app-project-card',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './project-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<Project>();
  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.language;

}
