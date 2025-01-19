import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { CommonModule } from '@angular/common';

import { Cocktail } from '../../interfaces/cocktail.interfaces';
import { MatTableDataSource, MatTableModule, } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule,Sort } from '@angular/material/sort';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../../dialogs/modal/modal.component';
import { ModalIngredientComponent } from '../../dialogs/modal-ingredient/modal-ingredient.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormatDatePipe } from '../../pipes/format-date.pipe';


@Component({
  selector: 'app-home',
  providers: [CocktailService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTableModule, HttpClientModule, MatPaginatorModule, MatSortModule, MatFormField, MatIconModule, MatFormFieldModule, FormsModule, MatInputModule, MatDialogModule, MatButtonModule, FormatDatePipe]
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'idDrink',
    'strDrinkThumb',
    'strDrink',
    'strCategory',
    'strAlcoholic',
    'ingredientCount',
    'lastModified',
  ];
  alcoholicCocktails = 0;
  noAlcoholicCocktails = 0;
  data: Cocktail[] = [];
  public cocktails: Cocktail[] = [];
  selectedCategory: any;
  dataSource = new MatTableDataSource<any>;
  searchKey: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Paginador
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  
  @ViewChild('modalElement') modalElement: any; // Modal element

  searchLetter: string = ''; // Para la búsqueda por letra
  http: any;

  constructor(private cocktailService: CocktailService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCocktails();
    this.sort.active = 'strDrink'; // Columna predeterminada
    this.sort.direction = 'asc'; // Orden ascendente
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadCocktails(): void {
    this.alcoholicCocktails = 0; // Inicializa el contador de cócteles alcohólicos
    this.noAlcoholicCocktails = 0; // Inicializa el contador de cócteles no alcohólicos

    this.cocktailService.searchCocktailByName('margarita').subscribe((response) => {
      if (response.drinks) {
        this.dataSource.data = response.drinks.map((drink: any) => {
          // Lógica de conteo con if-else
          if (drink.strAlcoholic === 'Alcoholic') {
            this.alcoholicCocktails++;
          } else if (drink.strAlcoholic === 'Non alcoholic') {
            this.noAlcoholicCocktails++;
          }

          return {
            ...drink,
            ingredientCount: this.countIngredients(drink), // Calcula el número de ingredientes
          };
        });
        // Asigna el paginador al dataSource
        this.dataSource.paginator = this.paginator;

      } else {
        console.warn('No se encontraron cócteles.');
      }
    });
  }
  searchCocktailByName(name: string): void {
    this.alcoholicCocktails = 0;
    this.noAlcoholicCocktails = 0;

    this.cocktailService.searchCocktailByName(name).subscribe((response) => {
      if (response.drinks) {
        this.dataSource.data = response.drinks.map((drink: any) => {
          // Lógica de conteo con if-else
          if (drink.strAlcoholic === 'Alcoholic') {
            this.alcoholicCocktails++;
          } else if (drink.strAlcoholic === 'Non alcoholic') {
            this.noAlcoholicCocktails++;
          }

          return {
            ...drink,
            ingredientCount: this.countIngredients(drink), // Calcula el número de ingredientes
          };
        });
        // Asigna el paginador al dataSource
        this.dataSource.paginator = this.paginator;

      } else {
        console.warn('No se encontraron cócteles en la respuesta.');
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  closeModal() {
    this.dialog.closeAll();
  }


  openDialog(category: string) {
    console.log(category);
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '80%', // Ancho del Modal
      data: { category: category }, // Pasar los datos de la categoría
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // Función para contar los ingredientes
  countIngredients(drink: any): number {
    let count = 0;
    for (let i = 1; i <= 15; i++) { // La API de cócteles normalmente tiene hasta 15 ingredientes
      if (drink[`strIngredient${i}`]) {
        count++;
      }
    }
    return count;
  }

  openDialogIngredient(element: any): void {
    const ingredients = this.extractIngredients(element);
    this.dialog.open(ModalIngredientComponent, {
      width: '400px',
      data: { ingredients },
    });
  }

  // Extrae los ingredientes del objeto del cóctel
  extractIngredients(drink: any): { name: string; measure: string; imageUrl: string }[] {
    const ingredients: { name: string; measure: string; imageUrl: string }[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({
          name: ingredient,
          measure: measure || 'No especificada',
          imageUrl: `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`, // URL base de la API para imágenes.
        });
      }
    }
    return ingredients;
  }

  navigateToCocktailDetail(id: string): void {
    this.router.navigate(['/cocktail', id]); // Redirige a la URL con el ID del cóctel
  }

  searchCocktailByLetter(letter: string): void {
    this.alcoholicCocktails = 0; // Inicializa el contador de cócteles alcohólicos
    this.noAlcoholicCocktails = 0; // Inicializa el contador de cócteles no alcohólicos

    this.cocktailService.searchCocktailByLetter(letter).subscribe((response) => {
      if (response.drinks) {
        this.dataSource.data = response.drinks.map((drink: any) => {
          // Lógica de conteo con if-else
          if (drink.strAlcoholic === 'Alcoholic') {
            this.alcoholicCocktails++;
          } else if (drink.strAlcoholic === 'Non alcoholic') {
            this.noAlcoholicCocktails++;
          }

          return {
            ...drink,
            ingredientCount: this.countIngredients(drink), // Calcula el número de ingredientes
          };
        });
        // Asigna el paginador al dataSource
        this.dataSource.paginator = this.paginator;
      } else {
        console.warn('No se encontraron cócteles.');
      }
    });
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    // if (sortState.direction) {
    //   this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    // } else {
    //   this._liveAnnouncer.announce('Sorting cleared');
    // }

  }
  // todo filtros de categorias, vasos y alcohólicos ya que tendria que realizar una peticion por cada uno de ellos
  filterCocktailsByGlass(glassType: string): void {
    this.alcoholicCocktails = 0; // Reinicia el contador de cócteles alcohólicos
    this.noAlcoholicCocktails = 0; // Reinicia el contador de cócteles no alcohólicos
  
    this.cocktailService.filterByGlass(glassType).subscribe((response) => {
      if (response.drinks) {
        this.dataSource.data = response.drinks.map((drink: any) => {
          // Lógica de conteo con if-else
          if (drink.strAlcoholic === 'Alcoholic') {
            this.alcoholicCocktails++;
          } else if (drink.strAlcoholic === 'Non alcoholic') {
            this.noAlcoholicCocktails++;
          }
  
          return {
            ...drink,
            ingredientCount: this.countIngredients(drink), // Calcula el número de ingredientes
          };
        });
        // Asigna el paginador al dataSource
        this.dataSource.paginator = this.paginator;
      } else {
        console.warn('No se encontraron cócteles para este tipo de vaso.');
      }
    });
  }


}
