import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// FullCalendar
import { FullCalendarModule } from '@fullcalendar/angular';


import { ProximosCursosComponent } from './proximos-cursos/proximos-cursos.component';
import { InicioComponent } from './inicio.component';
import { CalendarEventsComponent } from '../../components/calendar-events/calendar-events.component';


@NgModule({
  declarations: [
    InicioComponent,
    ProximosCursosComponent,

    CalendarEventsComponent,
  ],
  imports: [
    CommonModule,

    // Fullcalendar
    FullCalendarModule

  ]
})
export class InicioModule { }
