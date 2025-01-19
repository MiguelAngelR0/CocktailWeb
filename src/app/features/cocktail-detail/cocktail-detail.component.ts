import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from '../../dialogs/modal/modal.component';
import {  MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-cocktail-detail',
  standalone: true,
  imports: [HttpClientModule, MatCardModule, CommonModule, MatButtonModule, MatDialogModule,CarouselModule,MatIconModule],
  templateUrl: './cocktail-detail.component.html',
  styleUrl: './cocktail-detail.component.scss',
  providers: [CocktailService]
})
export class CocktailDetailComponent {
  cocktail: any; 
  instructions: string = ''; 
  language: string = 'en'; 
  cocktailId: any; // ID del cóctel
  ingredients: { name: string; measure: string; imageUrl: string }[] = [];

  // configuracion para el carousel
  cocktails:any[] =[]
  carouselOptions = {
    loop: true,    // Para poder deslizar sin fin
    margin: 10,
    nav: true,
    dots: true,
    items: 4,
    navText: ['<i class="material-icons">arrow_back_ios</i>', '<i class="material-icons">arrow_forward_ios</i>'],
  };

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cocktailId = params['id']; // Aquí recibe el id del URL
      if (this.cocktailId) {
        this.loadCocktails(this.cocktailId);
      }
    })
  }

  ngAfterViewInit() {
    this.cocktailId = this.route.snapshot.paramMap.get('id'); // Obtiene el ID del cóctel
    if (!this.cocktailId) {
      console.error('No se pudo obtener el ID del cóctel');
      return;
    }
    this.loadCocktails(this.cocktailId);
  }

  loadCocktails(id: string): void {
    this.cocktailService.lookupCocktailById(id).subscribe((response) => {
      
      if (response && response.drinks && response.drinks.length > 0) {
        this.cocktail = response.drinks[0];
        this.instructions = this.cocktail.strInstructions || 'No disponible';

        

        this.extractIngredients(this.cocktail);

        this.fetchCocktailsByCategory(this.cocktail.strCategory);

      } else {
        console.error('No se encontraron datos para este cóctel');
      }
    });
  }


  // Extrae los ingredientes del objeto del cóctel
  extractIngredients(drink: any): { name: string; measure: string; imageUrl: string }[] {
    
    this.ingredients = [];

    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];
      if (ingredient) {
        this.ingredients.push({
          name: ingredient,
          measure: measure || 'No especificada',
          imageUrl: `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`, // URL base de la API para imágenes.
        });
      }
    }
    return this.ingredients;
  }

  clearIngredients(): void {
    
  }
  

  updateInstructions(lang: string): void {
    
    this.language = lang;
    switch (lang) {
      case 'en':
        this.instructions = this.cocktail.strInstructions || 'No disponible';
        break;
      case 'es':
        this.instructions = this.cocktail[`strInstructionsES`] || 'No disponible';
        break;
      case 'it':
        this.instructions = this.cocktail[`strInstructionsIT`] || 'No disponible';
        break;
      case 'DE':
        this.instructions = this.cocktail[`strInstructionsDE`] || 'No disponible';
        break;
      case 'fr':
        this.instructions = this.cocktail[`strInstructionsFR`] || 'No disponible';
        break;
      default:
        this.instructions = 'No disponible';
        break;
    }
  }
  
  // openDialog(category: string) {
  //   console.log(category);
  //     const dialogRef = this.dialog.open(ModalComponent, {
  //       width: '80%', // Ancho del Modal
  //       data: { category: category }, // Pasar los datos de la categoría
  //     });
  
  //     // dialogRef.afterClosed().subscribe((result: any) => {
  //     //   console.log(`Dialog result: ${result}`);
  //     // });
  //   }

    fetchCocktailsByCategory(category: string): void {
      this.cocktailService.searchCocktailsByCategory(category).subscribe(
        (response) => {
          this.cocktails = response.drinks;
          
        },
        (error) => console.error(error)
      );
    }

    navigateToCocktailDetail(id: string): void {
      this.router.navigate(['/cocktail', id]); // Redirige a la URL con el ID del cóctel
    }

}
