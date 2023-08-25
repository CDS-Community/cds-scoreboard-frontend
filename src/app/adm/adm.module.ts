import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmRoutingModule } from './adm-routing.module';
import { ConfigModule } from './config/config.module';
import { LayoutGeneralComponent } from './layout-general/layout-general.component';



@NgModule({
  declarations: [


    LayoutGeneralComponent
  ],
  imports: [
    AdmRoutingModule,
    CommonModule,
    ConfigModule
  ]
})
export class AdmModule { }
