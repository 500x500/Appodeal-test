import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeSearchComponent } from './life-search.component';
import {RouterModule, Routes} from '@angular/router';
import {TuiInputModule} from '@taiga-ui/kit';
import {ReactiveFormsModule} from '@angular/forms';
import {LifeSearchService} from './life-search.service';
import {RepositoryCardModule} from '../repository-card/repository-card.module';



const routes: Routes = [
  {
    path: '',
    component: LifeSearchComponent
  }
];

@NgModule({
  declarations: [
    LifeSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiInputModule,
    ReactiveFormsModule,
    RepositoryCardModule,
  ],
  providers: [LifeSearchService]
})
export class LifeSearchModule { }
