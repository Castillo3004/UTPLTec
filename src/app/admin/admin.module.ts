import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { InicioModule } from './pages/inicio/inicio.module';

import { AdminPageComponent } from './layouts/admin-page/admin-page.component';

import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';

import { AgregarCapacitadoresComponent } from './pages/capacitadores/agregar-capacitadores/agrega-capacitadores.component';
import { ListaCapacitadoresComponent } from './pages/capacitadores/lista-capacitadores/lista-capacitadores.component';
import { VerCapacitadorComponent } from './pages/capacitadores/ver-capacitador/ver-capacitador.component';

import { AgregarEventoComponent } from './pages/eventos/agregar-evento/nuevo-evento.component';
import { ListaEventosComponent } from './pages/eventos/lista-eventos/lista-eventos.component';
import { VerEventoComponent } from './pages/eventos/ver-evento/ver-evento.component';
import { AsignarProfesorEventoComponent } from './pages/eventos/asignar-profesor-evento/asignar-profesor-evento.component';
import { MaterialModule } from '../material/material.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { PopupComponent } from './components/popup/popup.component';




@NgModule({
  declarations: [
    SideMenuComponent,
    HeaderAdminComponent,

    AdminPageComponent,

    AgregarCapacitadoresComponent,
    ListaCapacitadoresComponent,
    VerCapacitadorComponent,

    AgregarEventoComponent,
    ListaEventosComponent,
    VerEventoComponent,
    AsignarProfesorEventoComponent,
    ConfirmDialogComponent,
    PopupComponent,



  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    InicioModule,

    // Aqui esta todo lo de Angular Material
    MaterialModule,
    ReactiveFormsModule,

  ]
})
export class AdminModule { }
