import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmEventsRoutingModule } from './adm-events-routing.module';
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { DeleteEventComponent } from './pages/delete-event/delete-event.component';
import { EditEventComponent } from './pages/edit-event/edit-event.component';


@NgModule({
  declarations: [
    ListEventsComponent,
    NewEventComponent,
    DeleteEventComponent,
    EditEventComponent
  ],
  imports: [
    CommonModule,
    AdmEventsRoutingModule
  ]
})
export class AdmEventsModule { }
