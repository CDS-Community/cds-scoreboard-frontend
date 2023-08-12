import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewEventComponent } from './pages/new-event/new-event.component';
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { DeleteEventComponent } from './pages/delete-event/delete-event.component';
import { EditEventComponent } from './pages/edit-event/edit-event.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewEventComponent
  },
  {
    path: 'list',
    component: ListEventsComponent
  },
  {
    path: 'delete/:id',
    component: DeleteEventComponent
  },
  {
    path: 'edit/:id',
    component: EditEventComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmEventsRoutingModule { }
