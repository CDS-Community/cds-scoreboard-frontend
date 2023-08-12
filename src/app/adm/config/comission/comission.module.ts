import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComissionRoutingModule } from './comission-routing.module';
import { NewComissionComponent } from './pages/new-comission/new-comission.component';
import { EditComissionComponent } from './pages/edit-comission/edit-comission.component';
import { ListComissionComponent } from './pages/list-comission/list-comission.component';


@NgModule({
  declarations: [
    NewComissionComponent,
    EditComissionComponent,
    ListComissionComponent
  ],
  imports: [
    CommonModule,
    ComissionRoutingModule
  ]
})
export class ComissionModule { }
