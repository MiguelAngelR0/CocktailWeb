import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CocktailDetailComponent } from './features/cocktail-detail/cocktail-detail.component';

// export const routes: Routes = [
//     { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a Home
//     { path: 'home', component: HomeComponent },           // Ruta para Home
//     { path: 'cocktail/:id', component: CocktailDetailComponent }, // Detalles de cóctel
//     { path: '**', redirectTo: '/home' }                  // Ruta comodín
// ];

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },  // Reemplaza con tu página principal
    { path: 'cocktail/:id', component: CocktailDetailComponent },  // Aquí está configurado el detalle del cóctel
    // Puedes agregar más rutas según tu aplicación
  ];
