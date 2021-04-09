import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from './../models/Cocktail.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  hasSearched: boolean =true; 
  isdef:number = 0;
  constructor(private http: HttpClient) { }
  getIndexed(index: String): Observable<Cocktail[]> {

    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${index}`)
      .pipe(
        map((data: any) => {
          if (data.drinks === null) {
            return null;
          }
          else
            return data.drinks.map(Cocktail.transform)
        }
        ),
      );
  }

  getSearchedCocktail(search: String): Observable<Cocktail[]> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .pipe(
        map((data: any) => {
          if (data.drinks === null) {
            return null;
          }
          else
            return data.drinks.map(Cocktail.transform)
        }
        ),
      );
  }
  getIngredientCocktail(search: String): Observable<Cocktail[]> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`)
      .pipe(
        map((data: any) => {
          if (data.drinks === null) {
            return null;
          }
          else
            return data.drinks.map(Cocktail.transform)
        }
        ),
      );
  }

  searchById(id: number): Observable<Cocktail[]> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .pipe(
        map((data: any) => {
          if (data.drinks === null) {
            return null;
          }
          else
            return data.drinks.map(Cocktail.transform)
        }
        ),
      );

  }

  searchByType(search: string): Observable<Cocktail[]> {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search}`)
      .pipe(
        map((data: any) => {
          if (data.drinks === null) {
            return null;
          }
          else
            return data.drinks.map(Cocktail.transform)
        }
        ),
      );
  }
}
