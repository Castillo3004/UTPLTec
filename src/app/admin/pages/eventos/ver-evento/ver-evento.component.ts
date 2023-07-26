import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Evento } from 'src/app/admin/interfaces/evento.interface';

import { EventosService } from 'src/app/admin/services/eventos.service';

@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.css']
})
export class VerEventoComponent implements OnInit{

  public evento?: Evento;

  private activatedRoute = inject(ActivatedRoute);
  private eventosService = inject(EventosService);
  private router = inject( Router );


  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap( ({ id}) => this.eventosService.getEventoById( id ))
    ).subscribe( evento => {

      if( !evento ) return this.router.navigate(['admin/eventos/lista']);

      this.evento = evento;
      return;

    })

  }

  onDeleteEvento( id: number ){

    if( !id ) throw Error('Evento id is required');

    this.eventosService.deleteEventoById( id )
      .subscribe( () =>{
        this.router.navigate(['/admin/eventos/lista']);
      })

  }

}
