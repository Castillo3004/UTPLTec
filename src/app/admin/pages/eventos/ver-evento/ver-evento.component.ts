import { Component, OnInit, inject } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Eventos } from 'src/app/admin/interfaces/eventos.interface';
import { CapacitadoresService } from '../../../services/capacitadores.service';
import { Capacitadores } from 'src/app/admin/interfaces/capacitadores.interface';

@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.css']
})
export class VerEventoComponent implements OnInit{

  public evento?: Eventos;


  private capacitadoresService = inject(CapacitadoresService);
  private eventosService = inject(EventosService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject( Router );


  public capacitadoresByArea: Capacitadores[] = [];



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
