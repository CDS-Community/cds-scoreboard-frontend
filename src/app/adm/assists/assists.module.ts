import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistsRoutingModule } from './assists-routing.module';
import { ListAssistsComponent } from './pages/list-assists/list-assists.component';
import { CheckAssistComponent } from './pages/check-assist/check-assist.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ListAssistsComponent,
    CheckAssistComponent
  ],
  imports: [
    CommonModule,
    AssistsRoutingModule,
    MaterialModule
  ]
})
export class AssistsModule { }
