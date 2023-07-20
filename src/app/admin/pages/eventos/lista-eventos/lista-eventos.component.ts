import { Component, OnInit, inject } from '@angular/core';
import { Eventos } from 'src/app/admin/interfaces/eventos.interface';
import { EventosService } from 'src/app/admin/services/eventos.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit{

  public eventos: Eventos[] = [];

  private eventosService = inject( EventosService );

  ngOnInit(): void {
      this.eventosService.getEventos()
        .subscribe( eventos => this.eventos = eventos);
  }



}
