import { Component, OnInit, inject } from '@angular/core';
import { Evento } from 'src/app/admin/interfaces/evento.interface';
import { EventosService } from 'src/app/admin/services/eventos.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit{

  public eventos: Evento[] = [];

  private eventosService = inject( EventosService );


  private getAllEventos(){
    this.eventosService.getEventos()
        .subscribe( eventos => this.eventos = eventos);
  }

  ngOnInit(): void {
      this.getAllEventos();
  }


  onDeleteEvento( id: number ){
    if( !id ) throw Error('Capacitador id is required');

    this.eventosService.deleteEventoById( id ).subscribe( () =>{
      this.getAllEventos()
    })
  }





}
