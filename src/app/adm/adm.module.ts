import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmRoutingModule } from './adm-routing.module';
import { ConfigModule } from './config/config.module';
import { LayoutGeneralComponent } from './layout-general/layout-general.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LayoutGeneralComponent
  ],
  imports: [
    AdmRoutingModule,
    CommonModule,
    ConfigModule,
    MaterialModule
  ]
})
export class AdmModule { }
