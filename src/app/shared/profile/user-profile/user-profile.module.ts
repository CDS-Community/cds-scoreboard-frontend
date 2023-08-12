import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { EditUserProfileComponent } from './pages/edit-user-profile/edit-user-profile.component';
import { ViewUserProfileComponent } from './pages/view-user-profile/view-user-profile.component';


@NgModule({
  declarations: [
    EditUserProfileComponent,
    ViewUserProfileComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
