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

    console.log(this.capacitadoresByArea);
  }

}
