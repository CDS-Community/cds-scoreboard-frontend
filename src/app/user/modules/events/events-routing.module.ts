import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListPageComponent } from './pages/events-list-page/events-list-page.component';
import { EventShowPageComponent } from './pages/event-show-page/event-show-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'events-list', component: EventsListPageComponent},
      { path: 'events/:id', component: EventShowPageComponent},

      { path: '**', redirectTo: 'events-list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
