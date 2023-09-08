import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'role',
    loadChildren: () => import('./role/role.module').then(m => m.RoleModule),
    data: { name: 'role' },
  },
  {
    path: 'possition',
    loadChildren: () => import('./possition/possition.module').then(m => m.PossitionModule),
    data: { name: 'role' },
  },
  {
    path: 'comission',
    loadChildren: () => import('./comission/comission.module').then(m => m.ComissionModule),
    data: { name: 'role' },
  },
  {
    path: 'level',
    loadChildren: () => import('./level/level.module').then(m => m.LevelModule),
    data: { name: 'role' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
