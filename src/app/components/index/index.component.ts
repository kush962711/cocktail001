import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailService } from './../../services/cocktail.service';
import { LoaderService } from './../../services/loader.service';
import { Cocktail } from './../../models/Cocktail.model';
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
    public loader: LoaderService
  ) { }
  isFiltering: boolean = false;
  arr: Array<String> = [];
  searchList: Cocktail[];
  searchedElement: Cocktail;
  clicked: boolean = false;
  initialList: Cocktail[] = [];
  advancedSearch: boolean = false;
  searchListLength: number;

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
    this.cocktail.getIndexed('a').subscribe(res => {
      this.searchList = res;
    });
    this.cocktail.isDefault = true;
  }

  onLoadIndex(index: String) {
    this.searchListLength = 1;
    this.cocktail.isDefault = false;
    this.cocktail.isFiltering = false;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/browse', index]);
    });
  }

  onSearch(search: String) {
    this.cocktail.hasSearched = true;
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
    this.cocktail.hasSearched = false;
  }

  submitForm(): void {
    this.advancedSearch = true;
    this.cocktail.isDefault = false;
    this.cocktail.hasSearched = true;
    this.loader.spinnerShow();
    this.cocktail.isFiltering = true;
    this.searchList = [];
    const seen = new Set();
    this.initialList=[];
    if (this.filtersForm.value.ing && this.filtersForm.value.ordinary && this.filtersForm.value.cocktail) {

      let ing = this.filtersForm.value.ing.toLowerCase();
      console.log(ing);
      this.cocktail.searchByType('Ordinary_Drink')
        .subscribe(
          data => {
            for (let i = 0; i <= data.length - 1; i++) {
              this.cocktail.searchById(+data[i].id).
                subscribe(
                  data => this.initialList.push(data[0])
                )
            }
          }
        );

      this.cocktail.searchByType('Cocktail')
        .subscribe(
          data => {
            for (let i = 0; i <= data.length - 1; i++) {
              this.cocktail.searchById(+data[i].id).
                subscribe(
                  data => this.initialList.push(data[0])
                )
            }
          }
      );

      setTimeout(() => {
        for (let i = 0; i <= this.initialList.length - 1; i++) {
          let el = this.initialList[i];
          console.log(el);
          if (el.ingredient1) {
            console.log('Ing1 exists');
            if (el.ingredient1.toLowerCase().includes(ing)) {
              console.log('Contains word');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient2) {
            console.log('Ing2 exists');


            if (el.ingredient2.toLowerCase().includes(ing)) {
              console.log('conatains word');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient3) {
            console.log('ing3 exists');
            if (el.ingredient3.toLowerCase().includes(ing)) {
              console.log('');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient4) {
            console.log('ing4 exists');

            if (el.ingredient4.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient5) {
            console.log('ing5 exists');

            if (el.ingredient5.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient6) {
            console.log('ing6 exists');

            if (el.ingredient6.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient7) {
            console.log('ing7 exists');

            if (el.ingredient7.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient8) {
            console.log('ing8 exists');

            if (el.ingredient8.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }

        }
      }, 2000);
    }
    else if (this.filtersForm.value.ing && this.filtersForm.value.ordinary) {

      let ing = this.filtersForm.value.ing.toLowerCase();
      console.log(ing);
      this.cocktail.searchByType('Ordinary_Drink')
        .subscribe(
          data => {
            for (let i = 0; i <= data.length - 1; i++) {
              this.cocktail.searchById(+data[i].id).
                subscribe(
                  data => this.initialList.push(data[0])
                )
            }
          }
        );

      setTimeout(() => {
        for (let i = 0; i <= this.initialList.length - 1; i++) {
          let el = this.initialList[i];
          console.log(el);
          if (el.ingredient1) {
            console.log('Ing1 exists');
            if (el.ingredient1.toLowerCase().includes(ing)) {
              console.log('Contains word');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient2) {
            console.log('Ing2 exists');


            if (el.ingredient2.toLowerCase().includes(ing)) {
              console.log('conatains word');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient3) {
            console.log('ing3 exists');
            if (el.ingredient3.toLowerCase().includes(ing)) {
              console.log('');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient4) {
            console.log('ing4 exists');

            if (el.ingredient4.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient5) {
            console.log('ing5 exists');

            if (el.ingredient5.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient6) {
            console.log('ing6 exists');

            if (el.ingredient6.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient7) {
            console.log('ing7 exists');

            if (el.ingredient7.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient8) {
            console.log('ing8 exists');

            if (el.ingredient8.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }

        }
      }, 2000);
    }
    else if (this.filtersForm.value.ing && this.filtersForm.value.cocktail) {

      let ing = this.filtersForm.value.ing.toLowerCase();
      console.log(ing);
      this.cocktail.searchByType('Cocktail')
        .subscribe(
          data => {
            for (let i = 0; i <= data.length - 1; i++) {
              this.cocktail.searchById(+data[i].id).
                subscribe(
                  data => this.initialList.push(data[0])
                )
            }
          }
        );

      setTimeout(() => {
        for (let i = 0; i <= this.initialList.length - 1; i++) {
          let el = this.initialList[i];
          console.log(el);
          if (el.ingredient1) {
            console.log('Ing1 exists');
            if (el.ingredient1.toLowerCase().includes(ing)) {
              console.log('Contains word');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient2) {
            console.log('Ing2 exists');


            if (el.ingredient2.toLowerCase().includes(ing)) {
              console.log('conatains word');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient3) {
            console.log('ing3 exists');
            if (el.ingredient3.toLowerCase().includes(ing)) {
              console.log('');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient4) {
            console.log('ing4 exists');

            if (el.ingredient4.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient5) {
            console.log('ing5 exists');

            if (el.ingredient5.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient6) {
            console.log('ing6 exists');

            if (el.ingredient6.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient7) {
            console.log('ing7 exists');

            if (el.ingredient7.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }
           if (el.ingredient8) {
            console.log('ing8 exists');

            if (el.ingredient8.toLowerCase().includes(ing)) {
              console.log('true');

              this.searchList.push(el);
              continue;
            }
          }

        }
      }, 2000);
    }
    else if (this.filtersForm.value.ordinary && this.filtersForm.value.cocktail) {

      this.cocktail.searchByType('Ordinary_Drink')
        .subscribe(
          data => {
            for (let i = 0; i <= data.length - 1; i++) {
              this.cocktail.searchById(+data[i].id).
                subscribe(
                  data => this.initialList.push(data[0])
                )
            }
          }
        );

      this.cocktail.searchByType('Cocktail')
        .subscribe(
          data => {
            for (let i = 0; i <= data.length - 1; i++) {
              this.cocktail.searchById(+data[i].id).
                subscribe(
                  data => this.initialList.push(data[0])
                )
            }
          }
      );

      setTimeout(() => {
        this.searchList = this.initialList;
      }, 2000);
    }
    else if (this.filtersForm.value.ordinary) {

      this.cocktail.searchByType('Ordinary_Drink')
        .subscribe(
          data => {
            for (let i = 0; i <= data.length - 1; i++) {
              this.cocktail.searchById(+data[i].id).
                subscribe(
                  data => this.initialList.push(data[0])
                )
            }
          }
        );

      setTimeout(() => {
        this.searchList = this.initialList;
      }, 2000);
    }
    else if (this.filtersForm.value.cocktail) {

      this.cocktail.searchByType('Cocktail')
        .subscribe(
          data => {
            for (let i = 0; i <= data.length - 1; i++) {
              this.cocktail.searchById(+data[i].id).
                subscribe(
                  data => this.initialList.push(data[0])
                )
            }
          }
        );

      setTimeout(() => {
        this.searchList = this.initialList;
      }, 2000);
    }
    else if (this.filtersForm.value.ing) {
      console.log(this.filtersForm.value.ing)
      this.cocktail.getIngredientCocktail(this.filtersForm.value.ing)
        .subscribe(
          (data: Cocktail[]) => {
            for (let i = 0; i <= data.length - 1; i++) {
              this.cocktail.searchById(+data[i].id).
                subscribe(
                  data => this.searchList[i] = data[0]
                )
            }
            console.log(this.searchList);
          }
        );
    }
  }
}
