import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { CocktailService } from './../../services/cocktail.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router,
    public cocktail:CocktailService,
    public loader:LoaderService) { }

  ngOnInit(): void {
  }

  redirect():void{
    this.loader.spinnerShow();
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.cocktail.hasSearched = true;
      this.router.navigate(['/browse', 'A']);
    });  }
}
