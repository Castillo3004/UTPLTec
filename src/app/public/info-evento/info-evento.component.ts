import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/admin/interfaces/evento.interface';
import { CapacitadoresService } from 'src/app/admin/services/capacitadores.service';
import { EventosService } from 'src/app/admin/services/eventos.service';

@Component({
  selector: 'app-info-evento',
  templateUrl: './info-evento.component.html',
  styleUrls: ['./info-evento.component.css']
})
export class InfoEVentoComponent {
  evento?: Evento;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventosService: EventosService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const eventoId = params['id'];
      this.eventosService.getEventoById(eventoId).subscribe(evento => {
        this.evento = evento;
      });
    });

  }


  confirmarEvento() {
    if (this.evento) {
      // Convertir el ID a string
      const eventoId = this.evento.id.toString();

      // Llamar al servicio para confirmar el evento
      this.eventosService.confirmarEvento(eventoId).subscribe(
        eventoConfirmado => {
          console.log('Evento confirmado:', eventoConfirmado);
        },
        error => {
          console.error('Error al confirmar el evento', error);
        }
      );
    } else {
      console.error('El evento no está definido, no se puede confirmar.');
    }
  }


  rechazarEvento() {
    const eventoId = this.activatedRoute.snapshot.params['id'];
    this.eventosService.rechazarEvento(eventoId).subscribe(
      eventoRechazado => {
        // Aquí puedes realizar alguna acción adicional si el evento fue rechazado correctamente
        console.log('Evento rechazado:', eventoRechazado);
      },
      error => {
        console.error('Error al rechazar el evento', error);
      }
  );
  }

}
