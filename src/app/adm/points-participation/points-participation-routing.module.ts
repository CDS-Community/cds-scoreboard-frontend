import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignPointsComponent } from './pages/assign-points/assign-points.component';
import { NewParticipationComponent } from './pages/new-participation/new-participation.component';

const routes: Routes = [
  {
    path: 'assgin-points',
    component: AssignPointsComponent
  },
  {
    path: 'new-participation',
    component: NewParticipationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointsParticipationRoutingModule { }
