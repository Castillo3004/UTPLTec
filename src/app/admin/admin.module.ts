import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { InicioModule } from './pages/inicio/inicio.module';

import { AgregarCapacitadoresComponent } from './pages/capacitadores/agregar-capacitadores/agrega-capacitadores.component';
import { AdminPageComponent } from './layouts/admin-page/admin-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
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
    RouterModule,
    AdminRoutingModule,
    InicioModule,


    ReactiveFormsModule

  ]
})
export class AdminModule { }
