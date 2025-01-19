import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { CocktailService } from '../../services/cocktail.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [MatButtonModule,HttpClientModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [CocktailService]
})
export class NavbarComponent {

  constructor(private cocktailService: CocktailService,
      private router: Router 
    ) { }

    getRandomCocktail(): void {
      this.cocktailService.getRandomCocktail().subscribe(
        (response) => {
          if (response && response.drinks && response.drinks.length > 0) {
            const randomCocktailId = response.drinks[0].idDrink;
            this.router.navigate(['/cocktail', randomCocktailId]); // Navega a la página del cóctel aleatorio
          } else {
            console.error('No se encontró ningún cóctel aleatorio');
          }
        },
        (error) => {
          console.error('Error al obtener cóctel aleatorio:', error);
        }
      );
    }

}
