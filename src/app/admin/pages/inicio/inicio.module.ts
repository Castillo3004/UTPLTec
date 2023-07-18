import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProximosCursosComponent } from './proximos-cursos/proximos-cursos.component';
import { InicioComponent } from './inicio.component';


@NgModule({
  declarations: [
    InicioComponent,
    ProximosCursosComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class InicioModule { }
