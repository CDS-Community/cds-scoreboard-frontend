import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListPageComponent } from './pages/events-list-page/events-list-page.component';
import { EventsCreatePageComponent } from './pages/events-create-page/events-create-page.component';
import { EventsEditPageComponent } from './pages/events-edit-page/events-edit-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'events-list', component: EventsListPageComponent },
      { path: 'events-create', component: EventsCreatePageComponent},
      { path: 'events-edit/:id', component: EventsEditPageComponent },

      { path: '**', redirectTo: 'events-list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
