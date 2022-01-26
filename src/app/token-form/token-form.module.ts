import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenFormComponent } from './token-form.component';
import {RouterModule, Routes} from '@angular/router';
import {TuiInputModule, TuiIslandModule} from '@taiga-ui/kit';
import {TuiButtonModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputModeModule} from '@taiga-ui/cdk';
import {ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: TokenFormComponent
  }
];

@NgModule({
  declarations: [
    TokenFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiIslandModule,
    TuiButtonModule,
    TuiInputModeModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
  ]
})
export class TokenFormModule { }
