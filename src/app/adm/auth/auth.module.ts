import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdmComponent } from './pages/login-adm/login-adm.component';
import { LayoutAdmComponent } from './pages/layout-adm/layout-adm.component';



@NgModule({
  declarations: [
    LoginAdmComponent,
    LayoutAdmComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
