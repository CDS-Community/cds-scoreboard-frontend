import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmRoutingModule } from './adm-routing.module';
import { ConfigModule } from './config/config.module';



@NgModule({
  declarations: [

  ],
  imports: [
    AdmRoutingModule,
    CommonModule,
    ConfigModule
  ]
})
export class AdmModule { }
