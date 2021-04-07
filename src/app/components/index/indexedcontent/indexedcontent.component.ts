import { Component, OnInit, Input } from '@angular/core';
import { CocktailService } from '/Users/wiznidev/cocktail001/src/app/services/cocktail.service';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from './../../../models/Cocktail.model';
import { LoaderService } from './../../../services/loader.service';
import { Store } from '@ngxs/store';
import { GetCocktail } from './../../../actions/cocktail.action';
@Component({
  selector: 'app-indexedcontent',
  templateUrl: './indexedcontent.component.html',
  styleUrls: ['./indexedcontent.component.css']
})
export class IndexedcontentComponent implements OnInit {
  index: String;
  indexedList: Cocktail[];
  clicked: boolean = false;
  indexedElement: Cocktail;
  indexedListEmpty: boolean = false;
  constructor(
    private cocktail: CocktailService,
    private route: ActivatedRoute,
    public loader: LoaderService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.index = params.get('index');
    });
    if (this.index === 'X' || this.index === 'U') {
      this.indexedListEmpty = true;
    }
    else {
      this.loader.spinnerShow();
    }
    this.cocktail.getIndexed(this.index).subscribe(res => {
      this.indexedList = res;
    });
    this.cocktail.isFiltering = false;
  }
  cocktailDetail(cocktail: Cocktail): void {
    this.store.dispatch(new GetCocktail(cocktail));
    this.clicked = true;
  }
}


