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
  yearCreatin: '2025',
  languages: ['Angular', 'TypeScript', 'RxJS', 'TailwindCSS', 'CPanel'],
  readme: `
# Superaxion 01

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
      year: 'Año',
    },
    en: {
      title: 'Superaxion — Landing Page',
      description: 'Landing page for a psychologist with WhatsApp contact and specialties showcase.',
      year: 'Year',

    },
  },
},
  {
    slug: 'rhino-transport',
    liveUrl: 'https://rhinotransport.pe',
    image: '/assets/img/rhino-transport.png',
    yearCreatin: '2024',
    languages: ['Angular', 'SEO', 'Google Analytics 4', 'cPanel', 'GSAP'],
    readme: `
  # Rhino Transport

  A professional landing page developed for a heavy-duty trucking company, focused on visibility and measurable results.

  ## ✨ Features

  * SEO-optimized structure for better search engine ranking
  * Indexed routes for improved discoverability
  * Google Analytics 4 integration to track visitor regions across Peru
  * Smooth, performance-conscious animations
  * Fully responsive design for mobile and desktop devices

  ## 🛠️ Technologies

  * Angular · GSAP · Google Analytics 4

  ## 🏗️ Architecture

  Client-Side Rendering (CSR) with SEO-friendly routing and structured metadata for search engines.

  ## 📊 Analytics & SEO

  Implemented technical SEO practices to improve the site's positioning, with all routes properly indexed for search engines. Google Analytics 4 was configured to monitor traffic and identify which regions of Peru generate the most visits.

  ## 🎬 Animations

  All animations were built with GSAP, prioritizing smooth transitions without compromising load performance.

  ## 🚀 Deployment

  Deployed on cPanel.
    `,
    translations: {
      en: {
        title: 'Rhino Transport',
        description: 'Informational landing page for a heavy-duty trucking company.',
        year: 'Year',
      },
      es: {
        title: 'Rhino Transport',
        description: 'Landing page informativa para una empresa de camiones de carga pesada.',
        year: 'Año',
      },
    },
  },
  {
    slug: 'mentaiko',
    liveUrl: 'https://mentaiko-oficial.netlify.app/#contact-section',
    image: '/assets/img/mentaiko.png',
    yearCreatin: '2025',
    languages: ['JavaScript', 'HTML', 'CSS', 'SQL Server', 'AWS'],
    readme: `
  # Mentaiko

  A personal project built as a mental health companion for students, designed to offer a friendly space to talk things through.

  ## ✨ Features

  * Chat-based interaction with Menti, a virtual pet companion
  * User authentication with login system
  * Friendly, approachable interface aimed at students
  * Fully responsive design for mobile and desktop devices

  ## 🛠️ Technologies

  * JavaScript (Vanilla) · HTML · CSS
  * SQL Server (hosted on AWS)

  ## 🏗️ Architecture

  Front-end built entirely with core web fundamentals — no frameworks or libraries. The login system was backed by a SQL Server database hosted on AWS.

  > ⚠️ The AWS database has since been taken offline due to hosting costs, so the login feature is currently unavailable. The front-end experience remains fully functional.

  ## 🚀 Deployment

  Front-end deployed on Netlify. Database was hosted on AWS.
    `,
    translations: {
      en: {
        title: 'Mentaiko',
        description: 'A personal project built with core web technologies — a mental health companion where you can chat with your virtual pet, Menti.',
        year: 'Year',
      },
      es: {
        title: 'Mentaiko',
        description: 'Proyecto personal hecho con los lenguajes básicos de la web — un asistente de salud mental donde puedes chatear con tu mascota virtual, Menti.',
        year: 'Año',
      },
    },
  },
  {
    slug: 'image-histogram-equalizer',
    liveUrl: 'https://imageecualization.netlify.app/',
    image: '/assets/img/ecualizacion.png',
    yearCreatin: '2025',
    languages: ['JavaScript', 'HTML', 'Tailwind CSS'],
    readme: `
  # Ecualización y Expansión de Imágenes

  A pixel-level image processing tool that converts color images to grayscale and applies histogram equalization or histogram expansion, with direct manipulation of the image's pixel data.

  ## ✨ Features

  * Upload any color image for analysis
  * Automatic grayscale conversion
  * Real-time histogram visualization of the original image
  * **Histogram Equalization** — redistributes pixel intensity values to improve contrast
  * **Histogram Expansion** — stretches pixel values between a custom lower and upper limit (0–255)
  * Pixel-by-pixel image analysis using the Canvas API

  ## 🛠️ Technologies

  * JavaScript (Vanilla) · HTML · Tailwind CSS

  ## 🏗️ How it works

  The app reads the uploaded image through the **Canvas API**, extracting raw pixel data to:

  1. Convert the image to grayscale by averaging RGB channels
  2. Build a histogram representing pixel intensity distribution
  3. Apply either:
     - **Equalization**, redistributing intensities across the full 0–255 range based on cumulative distribution, or
     - **Expansion**, remapping pixel values between user-defined lower and upper bounds

  ## 📚 What I learned

  This project deepened my understanding of:

  * DOM manipulation and event handling
  * Working directly with image pixel data via Canvas
  * Core concepts of digital image processing (histograms, contrast, intensity distribution)

  ## 🚀 Deployment

  Deployed on Netlify.
    `,
    translations: {
      en: {
        title: 'Image Histogram Equalizer',
        description: 'A pixel-level image processing tool for grayscale conversion, histogram equalization and expansion.',
        year: 'Year',
      },
      es: {
        title: 'Ecualizador de Histograma de Imágenes',
        description: 'Herramienta de procesamiento de imágenes a nivel de píxel para conversión a escala de grises y ecualización/expansión de histograma.',
        year: 'Año',
      },
    },
  },
  {
    slug: '',
    liveUrl: '',
    image: '/assets/img/tortuga-projects.png',
    languages: [],
     yearCreatin: '2026',
    readmeUrl: '',
    translations: {
      en: {
        title: 'Docker Dashboard',
        description: 'A dashboard to monitor and manage Docker containers in real time.',
        year: 'Año',
      },
      es: {
        title: 'Estamos trabajando ;D',
        description: '',
        year: 'Year',
      },
    },
  },
]);

  readonly projects = this._projects.asReadonly();

  getBySlug(slug: string): Project | undefined {
    return this._projects().find(p => p.slug === slug);
  }


}
