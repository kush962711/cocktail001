import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailService } from './../../services/cocktail.service';
import { LoaderService } from './../../services/loader.service';
import { Cocktail } from './../../models/Cocktail.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    public cocktail: CocktailService,
    private router: Router,
    public loader: LoaderService
  ) { }
  isFiltering: boolean = false;
  arr: Array<String> = [];
  searchList: Cocktail[];
  searchedElement: Cocktail;
  clicked: boolean = false;
  searchListLength: number;
  createArray() {
    let j = 0;
    for (let i = 65; i <= 90; i++) {
      this.arr[j] = String.fromCharCode(i);
      j++;
    }
    return this.arr;
  }

  ngOnInit(): void {
    this.createArray();
    this.cocktail.getIndexed('a').subscribe(res => {
      this.searchList = res;
     });
     this.cocktail.isDefault = true;
  }

  onLoadIndex(index: String) {
    this.cocktail.isDefault = false;
    this.cocktail.isFiltering = false;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/browse', index]);
    });
  }

  onSearch(search: String) {
    this.cocktail.isDefault = false;
    this.searchListLength = 1;
    this.loader.spinnerShow();
    this.cocktail.isFiltering = true;
    this.cocktail.getSearchedCocktail(search)
      .subscribe(
        data => {
          this.searchList = data
          if (this.searchList === null) {
            this.loader.isLoadingSpinner = false;
            this.searchListLength = 0;
            console.log(this.searchListLength);
          }
        });
  }

  cocktailDetail(cocktail: Cocktail): void {
    this.searchedElement = cocktail;
    this.clicked = true;
  }
}
