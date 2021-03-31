import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/Cocktail.model';
import { CocktailService } from './../../../../services/cocktail.service';

@Component({
  selector: 'app-indexedcontentdetails',
  templateUrl: './indexedcontentdetails.component.html',
  styleUrls: ['./indexedcontentdetails.component.css']
})
export class IndexedcontentdetailsComponent implements OnInit {

  constructor(public cocktail: CocktailService) { }
  @Input() element: Cocktail;
  ngOnInit(): void {
    console.log(this.element);
  }

}
