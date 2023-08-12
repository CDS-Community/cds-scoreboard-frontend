import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { NewRoleComponent } from './pages/new-role/new-role.component';
import { EditRolesComponent } from './pages/edit-roles/edit-roles.component';
import { ListRolesComponent } from './pages/list-roles/list-roles.component';


@NgModule({
  declarations: [
    NewRoleComponent,
    EditRolesComponent,
    ListRolesComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
