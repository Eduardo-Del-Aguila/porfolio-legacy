import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly http = inject(HttpClient);
  private readonly dataUrl = '/data/projects.json';

  private readonly _projects = signal<Project[]>([]);
  private readonly _isLoading = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);

  readonly projects = this._projects.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();
  readonly error = this._error.asReadonly();

  readonly projectBySlug = (slug: string) =>
    computed(() => this._projects().find(p => p.slug === slug));


  // practicando para mi curso de Arqui Web
  load(): void {
    this._isLoading.set(true);
    this._error.set(null);

    this.http.get<Project[]>(this.dataUrl).subscribe({
      next: projects => {
        this._projects.set(projects);
        this._isLoading.set(false);
      },
      error: () => {
        this._error.set('Failed to load projects');
        this._isLoading.set(false);
      }
    });
  }
}
