import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProximosCursosComponent } from './proximos-cursos/proximos-cursos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { InicioComponent } from './inicio.component';


@NgModule({
  declarations: [
    InicioComponent,
    ProximosCursosComponent,
    ProfesoresComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class InicioModule { }
