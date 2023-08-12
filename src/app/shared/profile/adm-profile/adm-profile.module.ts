import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmProfileRoutingModule } from './adm-profile-routing.module';
import { ViewAdmProfileComponent } from './pages/view-adm-profile/view-adm-profile.component';
import { EditAdmProfileComponent } from './pages/edit-adm-profile/edit-adm-profile.component';


@NgModule({
  declarations: [
    ViewAdmProfileComponent,
    EditAdmProfileComponent
  ],
  imports: [
    CommonModule,
    AdmProfileRoutingModule
  ]
})
export class AdmProfileModule { }
