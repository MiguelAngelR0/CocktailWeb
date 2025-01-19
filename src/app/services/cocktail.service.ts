import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  searchCocktailByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.php?s=${name}`);
  }

  searchCocktailByLetter(letter: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.php?f=${letter}`);
  }

  searchIngredientByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.php?i=${name}`);
  }

  lookupCocktailById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookup.php?i=${id}`);
  }

  lookupIngredientById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookup.php?iid=${id}`);
  }

  getRandomCocktail(): Observable<any> {
    return this.http.get(`${this.baseUrl}/random.php`);
  }

  searchCocktailsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter.php?c=${category}`);
  }
  
  /** Filter by Alcoholic or Non-Alcoholic */
  filterByAlcoholic(type: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter.php?a=${type}`);
  }

  /** Filter by Category */
  filterByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter.php?c=${category}`);
  }

  /** Filter by Glass */
  filterByGlass(glassType: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter.php?g=${glassType}`);
  }

}
