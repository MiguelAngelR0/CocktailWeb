import { ServerRoute, RenderMode } from '@angular/ssr';
import { HomeComponent } from './features/home/home.component';
import { CocktailDetailComponent } from './features/cocktail-detail/cocktail-detail.component';
import { Routes } from '@angular/router';

// Configuración para rutas del servidor con Angular SSR
export const serverRoutes: ServerRoute[] = [
  {
    path: 'cocktail/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async (): Promise<Record<string, string>[]> => {
      // Aquí puedes obtener dinámicamente los IDs de los cócteles
      return [
        { id: '11007' },
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  }
];

// Configuración de rutas para la aplicación normal (client-side)
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cocktail/:id', component: CocktailDetailComponent },
  { path: '**', redirectTo: '/home' }
];