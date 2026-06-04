import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { ProjectsSection } from './components/projects-section/projects-section';
import { SkillsSection } from './components/skills-section/skills-section';
import { CertificationsSection } from './components/certifications-section/certifications-section';
import { ContactSection } from './components/contact-section/contact-section';
import { ProjectsService } from '../../core/services/projects.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { SkillsV2 } from "./components/skills-v2/skills-v2";

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, Navbar, Hero, ProjectsSection, SkillsSection, CertificationsSection, ContactSection, SkillsV2],
  // imports: [Navbar, Hero, ProjectsSection, SkillsSection, CertificationsSection, ContactSection],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
//Nuestro home es el smart component
export  class Home {
  readonly projectsService = inject(ProjectsService);


  ngOnInit(): void {
  }
  }
