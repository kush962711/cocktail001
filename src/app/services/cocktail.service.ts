import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from './../models/Cocktail.model';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  val: Observable<Cocktail[]>;
  isFiltering:boolean=false;
  isDefault:boolean;
  hasSearched: boolean;
  constructor(private http: HttpClient) { }
  getIndexed(index: String): Observable<Cocktail[]> {
 
     return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${index}`)
      .pipe(
        map((data:any) => {
        if(data.drinks===null){
          return null;
        }
        else
       return data.drinks.map(Cocktail.adapt)
        }
        ),
      );
  }

  getSearchedCocktail(search:String): Observable<Cocktail[]>{
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .pipe(
      map((data:any) => {
      if(data.drinks===null){
        return null;
      }
      else
     return data.drinks.map(Cocktail.adapt)
      }
      ),
    );
  }
  getIngredientCocktail(search:String): Observable<Cocktail[]>{
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`)
    .pipe(
      map((data:any) => {
      if(data.drinks===null){
        return null;
      }
      else
     return data.drinks.map(Cocktail.adapt)
      }
      ),
    );
  }
}
