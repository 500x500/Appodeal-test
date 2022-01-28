import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryCardComponent } from './repository-card.component';
import {TuiAvatarModule, TuiIslandModule} from '@taiga-ui/kit';
import {TuiLinkModule, TuiSvgModule} from '@taiga-ui/core';



@NgModule({
    declarations: [
        RepositoryCardComponent
    ],
    exports: [
        RepositoryCardComponent
    ],
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiLinkModule,
    TuiAvatarModule,
    TuiSvgModule
  ]
})
export class RepositoryCardModule { }
