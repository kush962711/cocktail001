import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailService } from './../../services/cocktail.service';
import { LoaderService } from './../../services/loader.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    public cocktail: CocktailService,
    private router: Router,
    public loader: LoaderService,
  ) { }
  arr: Array<String> = [];

  filtersForm = new FormGroup({
    ing: new FormControl(''),
    cocktail: new FormControl(''),
    ordinary: new FormControl('')
  });
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
  }

  onLoadIndex(index: String) {
    this.loader.spinnerShow();
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.cocktail.hasSearched = true;
      this.router.navigate(['/browse', index]);
    });
  }

  onSearch(search: String) {
    this.loader.spinnerShow();
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.cocktail.hasSearched = true;
      this.router.navigate(['/browse'], { queryParams: { s: `${search}` } });
    });
  }

  submitForm(): void {
    this.loader.spinnerShow();
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.cocktail.hasSearched = true;
      this.router.navigate(['/browse', 'search', 'adsearch'], {
        queryParams: {
          ing: this.filtersForm.value.ing, ordinary: this.filtersForm.value.ordinary
          , cocktail: this.filtersForm.value.cocktail
        }
      });
    });
  }
}
