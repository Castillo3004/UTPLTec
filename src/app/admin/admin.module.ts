import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AgregarCapacitadoresComponent } from './pages/capacitadores/agregar-capacitadores/agrega-capacitadores.component';
import { AdminPageComponent } from './layouts/admin-page/admin-page.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { InicioModule } from './pages/inicio/inicio.module';
import { ListaCapacitadoresComponent } from './pages/capacitadores/lista-capacitadores/lista-capacitadores.component';
import { AgregarEventoComponent } from './pages/eventos/agregar-evento/nuevo-evento.component';
import { ListaEventosComponent } from './pages/eventos/lista-eventos/lista-eventos.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    HeaderAdminComponent,

    AdminPageComponent,
    AgregarCapacitadoresComponent,
    ListaCapacitadoresComponent,
    AgregarEventoComponent,
    ListaEventosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    InicioModule,
    RouterModule,

  ]
})
export class AdminModule { }
