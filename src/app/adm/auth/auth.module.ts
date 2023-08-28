import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdmComponent } from './pages/login-adm/login-adm.component';
import { LayoutAdmComponent } from './pages/layout-adm/layout-adm.component';
import { AdmAuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { LayoutGeneralComponent } from '../layout-general/layout-general.component';



@NgModule({
  declarations: [
    LoginAdmComponent,
    LayoutAdmComponent

  ],
  imports: [
    CommonModule,
    AdmAuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
