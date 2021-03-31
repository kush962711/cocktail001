import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexedcontentComponent } from './components/index/indexedcontent/indexedcontent.component';

const routes: Routes = [
  {path:'browse/:index', component:IndexedcontentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
