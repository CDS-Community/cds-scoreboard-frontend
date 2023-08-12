import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastEventsComponent } from './pages/past-events/past-events.component';
import { UpcomingEventsComponent } from './pages/upcoming-events/upcoming-events.component';
import { EventDescriptionComponent } from './pages/event-description/event-description.component';

const routes: Routes = [
  {
    path: 'past-events',
    component: PastEventsComponent
  },
  {
    path: 'upcoming-events',
    component: UpcomingEventsComponent
  },
  {
    path: 'description',
    component: EventDescriptionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEventsRoutingModule { }
