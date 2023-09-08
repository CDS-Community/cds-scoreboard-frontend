import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

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
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: { name: 'auth' }
  },

  {
    path: '404',
    component: Error404PageComponent,
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
