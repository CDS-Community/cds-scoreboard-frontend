import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: { name: 'auth' }
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then(m => m.ConfigModule),
    data: { name: 'config' },
  },
  {
    path: 'events',
    loadChildren: () => import('./../shared/events/adm-events/adm-events.module').then(m => m.AdmEventsModule),
    data: { name: 'events' },
  },
  {
    path: 'profile',
    loadChildren: () => import('./../shared/profile/adm-profile/adm-profile.module').then(m => m.AdmProfileModule),
    data: { name: 'perfil' },
  },
  {
    path: 'assists',
    loadChildren: () => import('./assists/assists.module').then(m => m.AssistsModule),
    data: { name: 'assists' },
  },
  {
    path: 'participation-points',
    loadChildren: () => import('./points-participation/points-participation.module').then(m => m.PointsParticipationModule),
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
