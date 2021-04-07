import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Cocktail } from 'src/app/models/Cocktail.model';
import { CocktailService } from './../../../services/cocktail.service';
import { Observable } from 'rxjs';
import { CocktailState } from './../../../state/cocktail.state';
import { Store, Select } from '@ngxs/store';
@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  @Select(CocktailState.getCocktails) cocktail$:Observable<Cocktail>;
  element: Cocktail;
  constructor(public cocktail:CocktailService) { }
  ngOnInit(): void {
    this.cocktail$.subscribe(data=>this.element=data);
  }
}
