import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserProfileComponent } from './pages/view-user-profile/view-user-profile.component';
import { EditUserProfileComponent } from './pages/edit-user-profile/edit-user-profile.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewUserProfileComponent
  },
  {
    path: 'edit/:id',
    component: EditUserProfileComponent
  },
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
