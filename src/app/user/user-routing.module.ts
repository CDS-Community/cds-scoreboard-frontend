import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { LayoutGeneralComponent } from './layout-general/layout-general.component';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  //   data: { name: 'auth' }
  // },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'events',
    component: LayoutGeneralComponent,
    loadChildren: () => import('./../shared/events/user-events/user-events.module').then(m => m.UserEventsModule),
    data: { name: 'events' }
  },
  {
    path: 'profile',
    loadChildren: () => import('./../shared/profile/user-profile/user-profile.module').then(m => m.UserProfileModule),
    data: { name: 'profile' }
  },
  {
    path: 'about-us',
    component: DescriptionPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
