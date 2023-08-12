import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAdmProfileComponent } from './pages/view-adm-profile/view-adm-profile.component';
import { EditAdmProfileComponent } from './pages/edit-adm-profile/edit-adm-profile.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewAdmProfileComponent
  },
  {
    path: 'edit/:id',
    component: EditAdmProfileComponent
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
export class AdmProfileRoutingModule { }
