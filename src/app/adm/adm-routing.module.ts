import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutGeneralComponent } from './layouts/layout-general/layout-general.component';
import { LayoutAdmComponent } from '../auth/layouts/layout-adm/layout-adm.component';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   component: LayoutAdmComponent,
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  //   data: { name: 'auth' }
  // },
  {
    path: 'config',

    loadChildren: () => import('./modules/config/config.module').then(m => m.ConfigModule),
    data: { name: 'config' },
  },
  {
    path: 'events',
    loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule),
    data: { name: 'events' },
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    data: { name: 'perfil' },
  },
  {
    path: 'assists',
    component: LayoutGeneralComponent,
    loadChildren: () => import('./modules/assists/assists.module').then(m => m.AssistsModule),
    data: { name: 'assists' },
  },
  {
    path: 'points-participation',
    loadChildren: () => import('./modules/points-participation/points-participation.module').then(m => m.PointsParticipationModule),
    data: { name: 'participation-points' },
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
