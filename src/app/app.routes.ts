import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CocktailDetailComponent } from './features/cocktail-detail/cocktail-detail.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }, 
    { path: 'cocktail/:id', component: CocktailDetailComponent }, 
    { path: '**', component: NotFoundComponent }, 
  ];
