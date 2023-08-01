import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Capacitador } from 'src/app/admin/interfaces/capacitador.interface';
import { Evento } from 'src/app/admin/interfaces/evento.interface';
import { CapacitadoresService } from 'src/app/admin/services/capacitadores.service';
import { EventosService } from 'src/app/admin/services/eventos.service';

@Component({
  selector: 'app-asignar-profesor-evento',
  templateUrl: './asignar-profesor-evento.component.html',
  styleUrls: ['./asignar-profesor-evento.component.css']
})
export class AsignarProfesorEventoComponent implements OnInit{

  public evento?: Evento;


  private capacitadoresService = inject(CapacitadoresService);
  private eventosService = inject(EventosService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject( Router );


  public capacitadoresByArea: Capacitador[] = [];
  public correoEnviadoExitosamente = false;



  private getAllCapacitadoresByArea( areaId: number ){
    this.capacitadoresService.getCapacitadores()
      .subscribe( capacitadores => {
        this.capacitadoresByArea = capacitadores.filter(capacitador => capacitador.areas.some( area => area.id === areaId ));
      })
  }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => this.eventosService.getEventoById( id ))
      ).subscribe( evento => {

        if( !evento ) return this.router.navigate(['admin/eventos/lista']);

      this.evento = evento;
      this.getAllCapacitadoresByArea(evento.areas[0].id)
      return;
    })

  }


  enviarCorreo(docenteId: number, correoDocente: string) {
    const eventoId = +this.activatedRoute.snapshot.params['id'];

    const confirmarEnvio = window.confirm('¿Estás seguro de que quieres enviar el correo al docente?');

    if (confirmarEnvio && eventoId) {
      this.capacitadoresService.enviarCorreo(docenteId, correoDocente, eventoId)
        .subscribe(
          response => {
            console.log('Correo enviado correctamente al docente');
            this.correoEnviadoExitosamente = true; // Mostrar mensaje de éxito
          },
          error => {
            console.error('Error al enviar el correo al docente', error);
            console.log(correoDocente);
            // Aquí puedes mostrar algún mensaje de error o manejar el error de acuerdo a tus necesidades
          }
        );
    } else {
      console.log('Envío de correo cancelado por el usuario');
    }
  }

}
