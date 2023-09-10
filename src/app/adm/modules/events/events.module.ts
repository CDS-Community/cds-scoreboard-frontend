import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsListPageComponent } from './pages/events-list-page/events-list-page.component';
import { EventsCreatePageComponent } from './pages/events-create-page/events-create-page.component';
import { EventsEditPageComponent } from './pages/events-edit-page/events-edit-page.component';


@NgModule({
  declarations: [

    EventsListPageComponent,
    EventsCreatePageComponent,
    EventsEditPageComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
