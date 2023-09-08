import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewRoleComponent } from './pages/new-role/new-role.component';
import { EditRolesComponent } from './pages/edit-roles/edit-roles.component';
import { ListRolesComponent } from './pages/list-roles/list-roles.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewRoleComponent
  },
  {
    path: 'list',
    component: ListRolesComponent
  },
  {
    path: 'edit/:id',
    component: EditRolesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
