import { Component, OnInit, Input, DoCheck, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { Cocktail } from 'src/app/models/Cocktail.model';
import { CocktailService } from './../../../services/cocktail.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  private componentRef: ComponentRef<any>;
  constructor(public cocktail:CocktailService) { }
  @Input() element: Cocktail;
  ngOnInit(): void {
  }
 
}
