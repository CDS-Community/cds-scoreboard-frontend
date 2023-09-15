import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { UserRoutingModule } from './user-routing.module';
import { LayoutGeneralComponent } from './layouts/layout-general/layout-general.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomePageComponent,
    DescriptionPageComponent,
    LayoutGeneralComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class UserModule { }
