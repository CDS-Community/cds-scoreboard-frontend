import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdmComponent } from './pages/login-adm/login-adm.component';
import { LayoutAdmComponent } from './layouts/layout-adm/layout-adm.component';
import { AdmAuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { LayoutGeneralComponent } from '../adm/layouts/layout-general/layout-general.component';



@NgModule({
  declarations: [
    LoginAdmComponent,
    LayoutGeneralComponent

  ],
  imports: [
    CommonModule,
    AdmAuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
