import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { LayoutAdmComponent } from './pages/layout-adm/layout-adm.component';
import { LoginAdmComponent } from './pages/login-adm/login-adm.component';


// localhost:4200/adm/auth/
const routes: Routes = [
  {
    path: '',
    component: LayoutAdmComponent,
    children: [
      { path: 'login', component: LoginAdmComponent }
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule],

})
export class AdmAuthRoutingModule { }
