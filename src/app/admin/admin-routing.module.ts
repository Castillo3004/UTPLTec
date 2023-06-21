import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './layouts/admin-page/admin-page.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { CapacitadoresComponent } from './pages/capacitadores/capacitadores.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      { path: 'inicio', component: InicioComponent},
      { path: 'calendario', component: CalendarioComponent},
      { path: 'capacitadores', component: CapacitadoresComponent},
      { path: '**', redirectTo: 'inicio'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
