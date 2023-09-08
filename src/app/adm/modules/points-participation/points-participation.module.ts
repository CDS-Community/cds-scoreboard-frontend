import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointsParticipationRoutingModule } from './points-participation-routing.module';
import { NewParticipationComponent } from './pages/new-participation/new-participation.component';
import { AssignPointsComponent } from './pages/assign-points/assign-points.component';


@NgModule({
  declarations: [
  
    NewParticipationComponent,
       AssignPointsComponent
  ],
  imports: [
    CommonModule,
    PointsParticipationRoutingModule
  ]
})
export class PointsParticipationModule { }
