import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projectsData = signal<Project[]>([])


private readonly _projects = signal<Project[]>([
  {
    slug: 'ecommerce-angular',
    liveUrl: 'https://ecommerce-angular.netlify.app',
    image: '/assets/projects/ecommerce-angular.png',
    languages: ['Angular', 'TypeScript', 'Tailwind CSS'],
    readmeUrl: 'https://raw.githubusercontent.com/tuuser/ecommerce-angular/main/README.md',
    translations: {
      en: {
        title: 'Angular Ecommerce',
        description: 'A full ecommerce app built with Angular and Tailwind CSS.',
      },
      es: {
        title: 'Ecommerce Angular',
        description: 'Aplicación de ecommerce construida con Angular y Tailwind CSS.',
      },
    },
  },
  {
    slug: 'task-manager',
    liveUrl: 'https://task-manager.netlify.app',
    image: '/assets/projects/task-manager.png',
    languages: ['C#', '.NET', 'PostgreSQL'],
    readmeUrl: 'https://raw.githubusercontent.com/tuuser/task-manager/main/README.md',
    translations: {
      en: {
        title: 'Task Manager',
        description: 'A task management app with authentication and real-time updates.',
      },
      es: {
        title: 'Gestor de Tareas',
        description: 'App de gestión de tareas con autenticación y actualizaciones en tiempo real.',
      },
    },
  },
  {
    slug: 'docker-dashboard',
    liveUrl: 'https://docker-dashboard.netlify.app',
    image: '/assets/projects/docker-dashboard.png',
    languages: ['Docker', 'Angular', 'PostgreSQL'],
    readmeUrl: 'https://raw.githubusercontent.com/tuuser/docker-dashboard/main/README.md',
    translations: {
      en: {
        title: 'Docker Dashboard',
        description: 'A dashboard to monitor and manage Docker containers in real time.',
      },
      es: {
        title: 'Dashboard Docker',
        description: 'Dashboard para monitorear y gestionar contenedores Docker en tiempo real.',
      },
    },
  },
]);

  readonly projects = this._projects.asReadonly();

  getBySlug(slug: string): Project | undefined {
    return this._projects().find(p => p.slug === slug);
  }


}
