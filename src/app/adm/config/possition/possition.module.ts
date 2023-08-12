import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PossitionRoutingModule } from './possition-routing.module';
import { NewPossitionComponent } from './pages/new-possition/new-possition.component';
import { EditPossitionComponent } from './pages/edit-possition/edit-possition.component';
import { ListPossitionComponent } from './pages/list-possition/list-possition.component';


@NgModule({
  declarations: [
    NewPossitionComponent,
    EditPossitionComponent,
    ListPossitionComponent
  ],
  imports: [
    CommonModule,
    PossitionRoutingModule
  ]
})
export class PossitionModule { }
