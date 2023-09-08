import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmRoutingModule } from './adm-routing.module';
import { ConfigModule } from './config/config.module';
import { LayoutGeneralComponent } from './layouts/layout-general/layout-general.component';
import { MaterialModule } from '../material/material.module';
import { LayoutAdmComponent } from '../auth/layouts/layout-adm/layout-adm.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    LayoutAdmComponent,
    EventsComponent,
    ProfileComponent
  ],
  imports: [
    AdmRoutingModule,
    CommonModule,
    ConfigModule,
    MaterialModule
  ]
})
export class AdmModule { }
