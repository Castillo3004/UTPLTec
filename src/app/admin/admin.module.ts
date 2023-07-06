import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { CapacitadoresComponent } from './pages/capacitadores/capacitadores.component';
import { AdminPageComponent } from './layouts/admin-page/admin-page.component';
import { RouterModule } from '@angular/router';
import { NuevoEventoComponent } from './pages/nuevo-evento/nuevo-evento.component';



@NgModule({
  declarations: [
    AdminPageComponent,
    InicioComponent,
    CalendarioComponent,
    CapacitadoresComponent,
    NuevoEventoComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
