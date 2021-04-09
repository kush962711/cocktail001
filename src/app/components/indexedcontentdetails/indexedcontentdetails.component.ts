import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/Cocktail.model';
import { CocktailService } from '../../services/cocktail.service';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CocktailState } from '../../state/cocktail.state';

@Component({
  selector: 'app-indexedcontentdetails',
  templateUrl: './indexedcontentdetails.component.html',
  styleUrls: ['./indexedcontentdetails.component.css']
})
export class IndexedcontentdetailsComponent implements OnInit {
 
    @Select(CocktailState.getCocktail) cocktail$:Observable<Cocktail>;
    element : Cocktail;
    constructor(
      public cocktail:CocktailService){
      }
  ngOnInit(): void {
  this.cocktail$.subscribe(data=> {
    console.log(this.cocktail.hasSearched)
    this.element=data}
    );
  }
}
