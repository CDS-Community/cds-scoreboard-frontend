import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileShowComponent } from './pages/profile-show/profile-show.component';
import { ProfileUpdateComponent } from './pages/profile-update/profile-update.component';


@NgModule({
  declarations: [
    ProfileShowComponent,
    ProfileUpdateComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
