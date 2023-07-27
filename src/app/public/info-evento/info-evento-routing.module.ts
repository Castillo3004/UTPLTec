import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoEVentoComponent } from './info-evento.component';

const routes: Routes = [
  { path: 'infoEventos/:id', component: InfoEVentoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoEVentoRoutingModule { }
