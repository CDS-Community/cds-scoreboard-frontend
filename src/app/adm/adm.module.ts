import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './pages/perfil/perfil/perfil.component';
import { EditPerfilComponent } from './pages/perfil/edit-perfil/edit-perfil.component';
import { EditEventoComponent } from './pages/eventos/edit-evento/edit-evento.component';
import { ListEventosComponent } from './pages/eventos/list-eventos/list-eventos.component';
import { NewEventoComponent } from './pages/eventos/new-evento/new-evento.component';
import { MarcarAsistenciaComponent } from './pages/asistencias/marcar-asistencia/marcar-asistencia.component';
import { ListAsistentesComponent } from './pages/asistencias/list-asistentes/list-asistentes.component';
import { AsignarPuntosMiembrosComponent } from './pages/puntos/asignar-puntos-miembros/asignar-puntos-miembros.component';
import { AsignarPuntosStaffComponent } from './pages/puntos/asignar-puntos-staff/asignar-puntos-staff.component';
import { CrearPuntosParticipacionComponent } from './pages/puntos/crear-puntos-participacion/crear-puntos-participacion.component';
import { RoleComponent } from './config/role/role.component';
import { PossitionComponent } from './config/possition/possition.component';
import { ComissionComponent } from './config/comission/comission.component';
import { LevelComponent } from './config/level/level.component';
import { AdmRoutingModule } from './adm-routing.module';



@NgModule({
  declarations: [
    PerfilComponent,
    EditPerfilComponent,
    EditEventoComponent,
    ListEventosComponent,
    NewEventoComponent,
    MarcarAsistenciaComponent,
    ListAsistentesComponent,
    AsignarPuntosMiembrosComponent,
    AsignarPuntosStaffComponent,
    CrearPuntosParticipacionComponent,
    RoleComponent,
    PossitionComponent,
    ComissionComponent,
    LevelComponent
  ],
  imports: [
    AdmRoutingModule,
    CommonModule
  ]
})
export class AdmModule { }
