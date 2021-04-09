import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { IndexedcontentComponent } from './components/indexedcontent/indexedcontent.component';
import { IndexedcontentdetailsComponent } from './components/indexedcontentdetails/indexedcontentdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { NgxsModule } from '@ngxs/store';
import { CocktailState } from './state/cocktail.state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    IndexedcontentComponent,
    IndexedcontentdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatDividerModule,
    NgxsModule.forRoot([
      CocktailState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
