import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmRoutingModule } from './adm-routing.module';
import { LayoutGeneralComponent } from './layouts/layout-general/layout-general.component';
import { MaterialModule } from '../material/material.module';
import { LayoutAdmComponent } from '../auth/layouts/layout-adm/layout-adm.component';
import { ConfigModule } from './modules/config/config.module';




@NgModule({
  declarations: [
    LayoutAdmComponent,

  ],
  imports: [
    AdmRoutingModule,
    CommonModule,
    ConfigModule,
    MaterialModule
  ]
})
export class AdmModule { }
