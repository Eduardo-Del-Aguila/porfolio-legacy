import { afterNextRender, ChangeDetectionStrategy, Component, ElementRef, viewChildren } from '@angular/core';
import { Experience } from '../../../../core/models/experience';
import { TranslateModule } from '@ngx-translate/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-experience-section',
  imports: [TranslateModule],
  templateUrl: './experience-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection {
    readonly cards = viewChildren<ElementRef>('card');

  readonly experiences: Experience[] = [
    {
      company: 'DEVDATEP Consulting',
      companyLogo: '/assets/img/devdatep-logo.png',
      role: 'Líder de Área',
      period: 'abr. 2026 - actualidad',
      duration: '3 meses',
      location: 'En remoto',
      description: 'Manejo de versiones actuales y pasadas, asignación de tareas y planificación en conjunto con el área de documentación. Creación y seguimiento de proyectos reales.',
      skills: ['Desarrollo Web', 'Diseño UX/UI', 'Gestión de equipos', 'Planificación'],
    },
    {
      company: 'DEVDATEP Consulting',
      companyLogo: '/assets/img/devdatep-logo.png',
      role: 'Especialista en Diseño Web',
      period: 'mar. 2026 - actualidad',
      duration: '4 meses',
      location: 'Lima, Perú',
      description: 'Diseño y creación de sitios web a medida, enfocados en experiencia de usuario y buenas prácticas de desarrollo front-end.',
      skills: ['Desarrollo Web', 'Creación de sitios web'],
    },
    {
      company: 'Divcal BPO & Contact Center',
      companyLogo: '/assets/img/divcal-logo.png',
      role: 'Desarrollador de Front-end',
      period: 'ene. 2026',
      duration: '3 meses',
      location: 'Lima, Perú · En remoto',
      description: 'Desarrollo de interfaces web bajo contrato de prácticas, aplicando buenas prácticas de diseño front-end.',
      skills: ['Desarrollo Web', 'Diseño de fullstack'],
    },
  ];

constructor() {
  afterNextRender(() => {
    gsap.registerPlugin(ScrollTrigger);

    this.cards().forEach((card, i) => {
      gsap.from(card.nativeElement, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card.nativeElement,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play reverse play reverse',
        },
      });
    });
  });
}
}
