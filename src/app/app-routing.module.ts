import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexedcontentComponent } from './components/indexedcontent/indexedcontent.component';

const routes: Routes = [
 {path:'', component: IndexedcontentComponent, data:{kind:'default'}},
 {path: 'browse', component: IndexedcontentComponent ,data:{kind: 'search'}},
 {path: 'browse/:index', component: IndexedcontentComponent, data:{kind: 'index'}},
 {path: 'browse/:index/adsearch', component: IndexedcontentComponent, data:{kind: 'adsearch'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}