import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'cocktail/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Aquí defines los valores posibles para el parámetro `id`
      const cocktailIds = ['1', '2']; // Ejemplo: IDs de cócteles
      return cocktailIds.map(id => ({ id }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
