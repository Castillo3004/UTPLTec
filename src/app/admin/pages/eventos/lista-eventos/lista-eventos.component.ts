import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent {

  eventos = [
    { id: 1, evento: 'Fast API', fecha: '2023-07-19', hora: '12:00 PM', estado: 'Activo' },
    { id: 2, evento: 'Cafe de Loja', fecha: '2023-07-20', hora: '3:30 PM', estado: 'Inactivo' },
  ];

}
