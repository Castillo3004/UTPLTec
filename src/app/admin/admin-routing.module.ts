import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './layouts/admin-page/admin-page.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaCapacitadoresComponent } from './pages/capacitadores/lista-capacitadores/lista-capacitadores.component';
import { AgregarCapacitadoresComponent } from './pages/capacitadores/agregar-capacitadores/agrega-capacitadores.component';
import { AgregarEventoComponent } from './pages/eventos/agregar-evento/nuevo-evento.component';
import { ListaEventosComponent } from './pages/eventos/lista-eventos/lista-eventos.component';
import { VerEventoComponent } from './pages/eventos/ver-evento/ver-evento.component';
import { VerCapacitadorComponent } from './pages/capacitadores/ver-capacitador/ver-capacitador.component';
import { AsignarProfesorEventoComponent } from './pages/eventos/asignar-profesor-evento/asignar-profesor-evento.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      { path: 'inicio', component: InicioComponent},
      { path: 'eventos', children: [
        { path: 'evento/:id', component: VerEventoComponent },
        { path: 'lista', component: ListaEventosComponent },
        { path: 'agregar', component: AgregarEventoComponent },
        { path: 'editar/:id', component: AgregarEventoComponent },
        { path: 'asignarProfesor/:id', component: AsignarProfesorEventoComponent },
        ]
      },
      { path: 'capacitadores', children: [
          { path: 'capacitador/:id', component: VerCapacitadorComponent },
          { path: 'lista', component: ListaCapacitadoresComponent},
          { path: 'agregar', component: AgregarCapacitadoresComponent},
          { path: 'editar/:id', component: AgregarCapacitadoresComponent},
        ]
      },
      { path: '**', redirectTo: 'inicio'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
