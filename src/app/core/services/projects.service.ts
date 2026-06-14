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
  slug: 'superaxion-ui',
  liveUrl: 'https://superaxiongroup.com/#/layout',
  image: '/assets/img/superaxion.png',
  languages: ['Angular', 'TypeScript', 'RxJS', 'TailwindCSS', 'CPanel'],
  readme: `
# SuperaxionUi01

A professional landing page developed for a psychologist, designed to help patients connect quickly and easily.

## ✨ Features

* Professional profile and specialties presentation
* Direct contact through a WhatsApp button
* Location and availability information
* Fully responsive design for mobile and desktop devices

## 🛠️ Technologies

* Angular 21 · RxJS · TypeScript · CSS

## 🏗️ Architecture

Client-Side Rendering (CSR) with a modular architecture based on components, services, interfaces, and pipes.

## 🚀 Deployment

Deployed on cPanel.

  `,
  translations: {
    es: {
      title: 'Superaxion — Landing Page',
      description: 'Landing page para psicólogo con contacto vía WhatsApp y presentación de especialidades.',
    },
    en: {
      title: 'Superaxion — Landing Page',
      description: 'Landing page for a psychologist with WhatsApp contact and specialties showcase.',
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
