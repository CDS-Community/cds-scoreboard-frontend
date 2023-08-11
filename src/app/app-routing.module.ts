import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'adm',
    loadChildren: () => import('./adm/adm.module').then(m => m.AdmModule),
    data: { name: 'adm' }
  },
  {
    path: 'cds',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    data: { name: 'user' }
  },
  {
    path: '',
    redirectTo: 'cds',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
