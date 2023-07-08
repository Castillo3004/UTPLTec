import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { CapacitadoresComponent } from './pages/capacitadores/capacitadores.component';
import { AdminPageComponent } from './layouts/admin-page/admin-page.component';
import { RouterModule } from '@angular/router';
import { NuevoEventoComponent } from './pages/nuevo-evento/nuevo-evento.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { InicioModule } from './pages/inicio/inicio.module';



@NgModule({
  declarations: [
    AdminPageComponent,
    CalendarioComponent,
    CapacitadoresComponent,
    NuevoEventoComponent,
    SideMenuComponent,
    HeaderAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    InicioModule,
    RouterModule,

  ]
})
export class AdminModule { }
