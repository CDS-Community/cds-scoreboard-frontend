import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { LoginAdmComponent } from './pages/login-adm/login-adm.component';
import { LayoutAdmComponent } from './layouts/layout-adm/layout-adm.component';


// localhost:4200/auth/
const routes: Routes = [
  {
    path: '',
    component: LayoutAdmComponent,
    children: [
      { path: 'login', component: LoginAdmComponent},
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule],

})
export class AdmAuthRoutingModule { }
