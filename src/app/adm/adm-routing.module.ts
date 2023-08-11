import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil/perfil.component';
import { EditPerfilComponent } from './pages/perfil/edit-perfil/edit-perfil.component';
import { ListEventosComponent } from './pages/eventos/list-eventos/list-eventos.component';
import { NewEventoComponent } from './pages/eventos/new-evento/new-evento.component';
import { EditEventoComponent } from './pages/eventos/edit-evento/edit-evento.component';
import { ListAsistentesComponent } from './pages/asistencias/list-asistentes/list-asistentes.component';
import { MarcarAsistenciaComponent } from './pages/asistencias/marcar-asistencia/marcar-asistencia.component';
import { AsignarPuntosStaffComponent } from './pages/puntos/asignar-puntos-staff/asignar-puntos-staff.component';
import { AsignarPuntosMiembrosComponent } from './pages/puntos/asignar-puntos-miembros/asignar-puntos-miembros.component';
import { CrearPuntosParticipacionComponent } from './pages/puntos/crear-puntos-participacion/crear-puntos-participacion.component';
import { RoleComponent } from './config/role/role.component';
import { PossitionComponent } from './config/possition/possition.component';
import { ComissionComponent } from './config/comission/comission.component';
import { LevelComponent } from './config/level/level.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: { name: 'auth' }
  },
  {
    path: 'perfil',
    children: [
      {
        path: '',
        component: PerfilComponent
      },
      {
        path: 'edit/:id',
        component: EditPerfilComponent
      }
    ]
  },
  {
    path: 'eventos',
    children: [
      {
        path: 'new',
        component: NewEventoComponent
      },
      {
        path: 'list',
        component: ListEventosComponent
      },
      {
        path: 'edit/:id',
        component: EditEventoComponent
      }
    ]
  },
  {
    path: 'asistencias',
    children: [
      {
        path: 'check/:id',
        component: MarcarAsistenciaComponent
      },
      {
        path: 'list',
        component: ListAsistentesComponent
      }
    ]
  },
  {
    path: 'participacion',
    children: [
      {
        path: 'points-staff',
        component: AsignarPuntosStaffComponent
      },
      {
        path: 'points-miembros',
        component: AsignarPuntosMiembrosComponent
      },
      {
        path: 'new-points',
        component: CrearPuntosParticipacionComponent
      }
    ]
  },
  {
    path: 'config',
    children: [
      {
        path: 'role',
        component: RoleComponent
      },
      {
        path: 'possition',
        component: PossitionComponent
      },
      {
        path: 'comission',
        component: ComissionComponent
      },
      {
        path: 'level',
        component: LevelComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'auth',
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
export class AdmRoutingModule { }
