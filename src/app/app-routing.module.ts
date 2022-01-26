import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/token-form', pathMatch: 'full' },
  { path: 'token-form', loadChildren: () => import('../app/token-form/token-form.module').then(m => m.TokenFormModule)},
  { path: 'life-search', loadChildren: () => import('../app/life-search/life-search.module').then(m => m.LifeSearchModule)},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

})
export class AppRoutingModule { }
