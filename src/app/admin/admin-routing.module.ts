import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './layouts/admin-page/admin-page.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaCapacitadoresComponent } from './pages/capacitadores/lista-capacitadores/lista-capacitadores.component';
import { AgregarCapacitadoresComponent } from './pages/capacitadores/agregar-capacitadores/agrega-capacitadores.component';
import { AgregarEventoComponent } from './pages/eventos/agregar-evento/nuevo-evento.component';
import { ListaEventosComponent } from './pages/eventos/lista-eventos/lista-eventos.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      { path: 'inicio', component: InicioComponent},
      { path: 'eventos', children: [
          { path: 'lista', component: ListaEventosComponent },
          { path: 'agregar', component: AgregarEventoComponent },
        ]
      },
      { path: 'capacitadores', children: [
          { path: 'lista', component: ListaCapacitadoresComponent},
          { path: 'agregar', component: AgregarCapacitadoresComponent},
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
