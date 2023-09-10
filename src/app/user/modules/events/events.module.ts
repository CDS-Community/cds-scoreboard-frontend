import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsListPageComponent } from './pages/events-list-page/events-list-page.component';
import { EventShowPageComponent } from './pages/event-show-page/event-show-page.component';


@NgModule({
  declarations: [
    EventsListPageComponent,
    EventShowPageComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
