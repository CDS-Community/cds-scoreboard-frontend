import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EventoDescriptionComponent } from './pages/eventos/evento-description/evento-description.component';
import { EventosProximosComponent } from './pages/eventos/eventos-proximos/eventos-proximos.component';
import { EventosAnterioresComponent } from './pages/eventos/eventos-anteriores/eventos-anteriores.component';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { EditPerfilComponent } from './pages/perfil/edit-perfil/edit-perfil.component';
import { VerPerfilComponent } from './pages/perfil/ver-perfil/ver-perfil.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: { name: 'auth' }
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'event/: id',
    component: EventoDescriptionComponent
  },
  {
    path: 'events',
    component: EventosProximosComponent
  },
  {
    path: 'past-events',
    component: EventosAnterioresComponent
  },
  {
    path: 'about-us',
    component: DescriptionPageComponent
  },
  {
    path: 'perfil',
    children: [
      {
        path: '',
        component: VerPerfilComponent
      },
      {
        path: 'edit/:id',
        component: EditPerfilComponent
      }
    ]
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
