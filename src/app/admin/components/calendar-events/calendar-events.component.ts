import { Component } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'calendar-events',
  templateUrl: './calendar-events.component.html',
  styleUrls: ['./calendar-events.component.css']
})
export class CalendarEventsComponent {

  calendarOptions: CalendarOptions = {
    contentHeight: 370,
    locale: esLocale,
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };




}
