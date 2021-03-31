import { Component, ElementRef } from '@angular/core';
import { CocktailService }  from './services/cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cocktail:CocktailService,
    private elementRef: ElementRef){}

  title = 'cocktail002';


  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =  '#ffffff';
    ;
 }
}
