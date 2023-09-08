import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelRoutingModule } from './level-routing.module';
import { NewLevelComponent } from './pages/new-level/new-level.component';
import { EditLevelComponent } from './pages/edit-level/edit-level.component';
import { ListLevelComponent } from './pages/list-level/list-level.component';


@NgModule({
  declarations: [
    NewLevelComponent,
    EditLevelComponent,
    ListLevelComponent
  ],
  imports: [
    CommonModule,
    LevelRoutingModule
  ]
})
export class LevelModule { }
