import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  // {
  //   path: 'projects/:slug',
  //   renderMode: RenderMode.Prerender,
  //   async getPrerenderParams() {
  //     const projects = await import('../data/projects.json');
  //     return projects.default.map((p: { slug: string }) => ({ slug: p.slug }));
  //   },
  // },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
