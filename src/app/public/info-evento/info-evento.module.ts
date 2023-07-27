import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoEVentoRoutingModule } from './info-evento-routing.module';
import { InfoEVentoComponent } from './info-evento.component';


@NgModule({
  declarations: [
    InfoEVentoComponent
  ],
  imports: [
    CommonModule,
    InfoEVentoRoutingModule
  ]
})
export class InfoEVentoModule { }
