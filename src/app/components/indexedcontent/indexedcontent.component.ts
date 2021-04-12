import { Component, OnInit } from '@angular/core';
import { CocktailService } from '/Users/wiznidev/cocktail001/src/app/services/cocktail.service';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from '../../models/Cocktail.model';
import { LoaderService } from '../../services/loader.service';
import { Store, Select } from '@ngxs/store';
import { GetCocktail, GetCocktails } from '../../actions/cocktail.action';
import { CocktailState } from './../../state/cocktail.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-indexedcontent',
  templateUrl: './indexedcontent.component.html',
  styleUrls: ['./indexedcontent.component.css']
})
export class IndexedcontentComponent implements OnInit {

  @Select(CocktailState.getCocktails) cocktail$: Observable<Cocktail[]>;
  index: String;
  indexedList: Cocktail[];
  clicked: boolean = false;
  indexedElement: Cocktail;
  indexedListEmpty: boolean = false;
  search: String;
  ing: String;
  ordinary: boolean;
  cocktail1: boolean;
  initialList: Cocktail[] = [];
  constructor(
    public cocktail: CocktailService,
    private route: ActivatedRoute,
    public loader: LoaderService,
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {

      switch (data.kind) {
        case 'default':{
          this.cocktail.getIndexed('a').subscribe(res=>{
            this.indexedList = [];
            this.indexedList =  res;
            this.store.dispatch(new GetCocktails(this.indexedList));
          });
          break;
        }
        case 'index': {
          this.route.paramMap.subscribe((params: ParamMap) => {
            this.index=params.get('index');
           if (this.index === 'X' || this.index === 'U') {
              this.indexedListEmpty = true;
              this.indexedList = [];
              this.loader.isLoadingSpinner = false;
              this.store.dispatch(new GetCocktails(this.indexedList));
            }
            else {
                this.cocktail.getIndexed(this.index).subscribe(res => {
                this.indexedList=[];
                this.indexedListEmpty = false;
                this.indexedList = res;
                this.store.dispatch(new GetCocktails(this.indexedList));
                console.log(this.indexedList);
              });
            }
          });
          break;
        }

        case 'search': {
          this.route.queryParamMap.subscribe((qp) => {
            this.search = qp.get('s');
            console.log(this.search);
            if (this.search.length === 0) {
              this.indexedListEmpty = true;
            }
            else {
              this.cocktail.getSearchedCocktail(this.search)
                .subscribe(
                  data => {
                    this.indexedList = [];
                    data === null ? this.indexedListEmpty= true : this.indexedList=data;
                    this.store.dispatch(new GetCocktails(this.indexedList));
                  });
            }
          });
          break;
        }

        case 'adsearch':
          {
            console.log(true);
            this.route.queryParamMap.subscribe((qp) => {
              this.ing = qp.get('ing');
              if (qp.get('ordinary') === 'true')
                this.ordinary = true;
              else
                this.ordinary = false;

              if (qp.get('cocktail') === 'true')
                this.cocktail1 = true;
              else
                this.cocktail1 = false;
              console.log(this.cocktail1);

              this.indexedList = [];
              if (this.ing.length > 0 && this.ordinary && this.cocktail1) { //if selected all three fields in advanced search
                this.initialList = [];
                let ing = this.ing.toLowerCase();
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
                  this.indexedList = [];
                  for (let i = 0; i <= this.initialList.length - 1; i++) {
                    let el = this.initialList[i];
                    console.log(el);
                    if (el.ingredient1) {
                      console.log('Ing1 exists');
                      if (el.ingredient1.toLowerCase().includes(ing)) {
                        console.log('Contains word');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient2) {
                      console.log('Ing2 exists');


                      if (el.ingredient2.toLowerCase().includes(ing)) {
                        console.log('conatains word');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient3) {
                      console.log('ing3 exists');
                      if (el.ingredient3.toLowerCase().includes(ing)) {
                        console.log('');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient4) {
                      console.log('ing4 exists');

                      if (el.ingredient4.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient5) {
                      console.log('ing5 exists');

                      if (el.ingredient5.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient6) {
                      console.log('ing6 exists');

                      if (el.ingredient6.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient7) {
                      console.log('ing7 exists');

                      if (el.ingredient7.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient8) {
                      console.log('ing8 exists');

                      if (el.ingredient8.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }

                  }
                  if (this.indexedList.length === 0)
                    this.indexedListEmpty = true;
                    this.store.dispatch(new GetCocktails(this.indexedList));
                }, 2000);
              }
              else if (this.ing.length > 0 && this.ordinary) { //searching ordinary drinks that contain a specific ingredient
                let ing = this.ing.toLowerCase();
                console.log(ing);
                this.cocktail.searchByType('Ordinary_Drink')
                  .subscribe(
                    data => {
                      this.initialList = [];
                      for (let i = 0; i <= data.length - 1; i++) {
                        this.cocktail.searchById(+data[i].id).
                          subscribe(
                            data => this.initialList.push(data[0])
                          )
                      }
                    }
                  );

                setTimeout(() => {
                  this.indexedList = [];
                  if (this.initialList.length === 0)
                    this.indexedListEmpty = true;
                  for (let i = 0; i <= this.initialList.length - 1; i++) {
                    let el = this.initialList[i];
                    console.log(el);
                    if (el.ingredient1) {
                      console.log('Ing1 exists');
                      if (el.ingredient1.toLowerCase().includes(ing)) {
                        console.log('Contains word');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient2) {
                      console.log('Ing2 exists');


                      if (el.ingredient2.toLowerCase().includes(ing)) {
                        console.log('conatains word');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient3) {
                      console.log('ing3 exists');
                      if (el.ingredient3.toLowerCase().includes(ing)) {
                        console.log('');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient4) {
                      console.log('ing4 exists');

                      if (el.ingredient4.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient5) {
                      console.log('ing5 exists');

                      if (el.ingredient5.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient6) {
                      console.log('ing6 exists');

                      if (el.ingredient6.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient7) {
                      console.log('ing7 exists');

                      if (el.ingredient7.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient8) {
                      console.log('ing8 exists');

                      if (el.ingredient8.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }

                  }
                  if (this.indexedList.length === 0)
                    this.indexedListEmpty = true;
                    this.store.dispatch(new GetCocktails(this.indexedList));
                }, 2000);
              }
              else if (this.ing.length > 0 && this.cocktail1) { //searching cocktails that contain a specific ingredient
                this.initialList = [];
                let ing = this.ing.toLowerCase();
                console.log(ing);
                this.cocktail.searchByType('Cocktail')
                  .subscribe(
                    data => {
                      this.initialList = [];
                      for (let i = 0; i <= data.length - 1; i++) {
                        this.cocktail.searchById(+data[i].id).
                          subscribe(
                            data => this.initialList.push(data[0])
                          )
                      }
                    }
                  );

                setTimeout(() => {
                  this.indexedList = [];
                  for (let i = 0; i <= this.initialList.length - 1; i++) {
                    let el = this.initialList[i];
                    console.log(el);
                    if (el.ingredient1) {
                      console.log('Ing1 exists');
                      if (el.ingredient1.toLowerCase().includes(ing)) {
                        console.log('Contains word');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient2) {
                      console.log('Ing2 exists');


                      if (el.ingredient2.toLowerCase().includes(ing)) {
                        console.log('conatains word');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient3) {
                      console.log('ing3 exists');
                      if (el.ingredient3.toLowerCase().includes(ing)) {
                        console.log('');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient4) {
                      console.log('ing4 exists');

                      if (el.ingredient4.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient5) {
                      console.log('ing5 exists');

                      if (el.ingredient5.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient6) {
                      console.log('ing6 exists');

                      if (el.ingredient6.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient7) {
                      console.log('ing7 exists');

                      if (el.ingredient7.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                    if (el.ingredient8) {
                      console.log('ing8 exists');

                      if (el.ingredient8.toLowerCase().includes(ing)) {
                        console.log('true');

                        this.indexedList.push(el);
                        continue;
                      }
                    }
                  }
                  if (this.indexedList.length === 0)
                    this.indexedListEmpty = true;
                    this.store.dispatch(new GetCocktails(this.indexedList));
                }, 2000);
              }
              else if (this.ordinary && this.cocktail1) {  //displaying all ordinary drinks and cocktails
                this.cocktail.searchByType('Ordinary_Drink')
                  .subscribe(
                    data => {
                      this.initialList = [];
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
                      this.initialList = [];
                      for (let i = 0; i <= data.length - 1; i++) {
                        this.cocktail.searchById(+data[i].id).
                          subscribe(
                            data => this.initialList.push(data[0])
                          )
                      }
                    }
                  );

                setTimeout(() => {
                  this.indexedList = [];
                  this.indexedList = this.initialList;
                  this.store.dispatch(new GetCocktails(this.indexedList));
                }, 2000);
              }
              else if (this.ordinary) { //displaying all ordinary drinks

                this.cocktail.searchByType('Ordinary_Drink')
                  .subscribe(
                    data => {
                      this.initialList = [];
                      for (let i = 0; i <= data.length - 1; i++) {
                        this.cocktail.searchById(+data[i].id).
                          subscribe(
                            data => this.initialList.push(data[0])
                          )
                      }
                    }
                  );
                setTimeout(() => {
                  this.indexedList = [];
                  this.indexedList = this.initialList;
                  this.store.dispatch(new GetCocktails(this.indexedList));
                }, 2000);
              }
              else if (this.cocktail1) {   //displaying all cocktails

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
                  this.indexedList = [];
                  this.indexedList = this.initialList;
                  this.store.dispatch(new GetCocktails(this.indexedList));
                }, 2000);
              }
              else if (this.ing) { //searching a particular ingredient
                console.log(this.ing.length > 0)
                this.cocktail.getIngredientCocktail(this.ing)
                  .subscribe(
                    (data: Cocktail[]) => {
                      this.initialList = [];
                      for (let i = 0; i <= data.length - 1; i++) {
                        this.cocktail.searchById(+data[i].id).
                          subscribe(
                            data => {
                              this.initialList[i] = data[0]
                            }
                          )
                      }
                    }
                  );

                setTimeout(() => {
                  this.indexedList = [];
                  console.log(this.initialList);
                  this.indexedList = this.initialList;
                  console.log(this.indexedList);
                  if (this.initialList.length === 0)
                    this.indexedListEmpty = true;
                  this.store.dispatch(new GetCocktails(this.indexedList));
                }, 2000);
              }
              else {
                this.indexedListEmpty = true;
              }
            })
          }
          break;
      }
    })
  }

  cocktailDetail(cocktail: Cocktail): void {
    this.cocktail.hasSearched = false;
    this.store.dispatch(new GetCocktail(cocktail));
    this.clicked = true;
  }
}


