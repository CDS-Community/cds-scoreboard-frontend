import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileShowComponent } from './pages/profile-show/profile-show.component';
import { ProfileUpdateComponent } from './pages/profile-update/profile-update.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'view', component: ProfileShowComponent},
      { path: 'update', component: ProfileUpdateComponent},

      { path: '**', redirectTo: 'view' },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
