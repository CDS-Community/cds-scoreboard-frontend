import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEventsRoutingModule } from './user-events-routing.module';
import { PastEventsComponent } from './pages/past-events/past-events.component';
import { UpcomingEventsComponent } from './pages/upcoming-events/upcoming-events.component';
import { EventDescriptionComponent } from './pages/event-description/event-description.component';


@NgModule({
  declarations: [
    PastEventsComponent,
    UpcomingEventsComponent,
    EventDescriptionComponent
  ],
  imports: [
    CommonModule,
    UserEventsRoutingModule
  ]
})
export class UserEventsModule { }
