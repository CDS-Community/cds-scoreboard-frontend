import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { EventosProximosComponent } from './pages/eventos/eventos-proximos/eventos-proximos.component';
import { EventosAnterioresComponent } from './pages/eventos/eventos-anteriores/eventos-anteriores.component';
import { EventoDescriptionComponent } from './pages/eventos/evento-description/evento-description.component';
import { VerPerfilComponent } from './pages/perfil/ver-perfil/ver-perfil.component';
import { EditPerfilComponent } from './pages/perfil/edit-perfil/edit-perfil.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    HomePageComponent,
    DescriptionPageComponent,
    EventosProximosComponent,
    EventosAnterioresComponent,
    EventoDescriptionComponent,
    VerPerfilComponent,
    EditPerfilComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
