import { Component,Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CocktailService } from '../../services/cocktail.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  standalone: true,
  providers: [CocktailService]
})
export class ModalComponent {
  dialog: any;
  category: string;
  cocktailsByCategory: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { category: string },
  private cocktailService: CocktailService,
  private router: Router
) {
    this.category = data.category;

  }

  ngOnInit(): void {
    console.log(this.data);
    this.fetchCocktailsByCategory();
  }

  fetchCocktailsByCategory() {
    this.cocktailService.searchCocktailsByCategory(this.category).subscribe(
       
      response => {
        console.log("respuesta de la categoria"+this.category)
        if (response.drinks) {
          this.cocktailsByCategory = response.drinks;
        } else {
          console.warn('No se encontraron cócteles en esta categoría.');
        }
      },
      error => {
        console.error('Error al obtener los cócteles por categoría', error);
      }
    );
  }
  navigateToCocktailDetail(id: string): void {
    this.router.navigate(['/cocktail', id]); // Redirige a la URL con el ID del cóctel
  }
  
  closeDialog() {
    this.dialog.closeAll();
  }


}
