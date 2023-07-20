import { Component } from '@angular/core';

@Component({
  selector: 'admin-lista-capacitadores',
  templateUrl: './lista-capacitadores.component.html',
  styleUrls: ['./lista-capacitadores.component.css']
})
export class ListaCapacitadoresComponent {

  capacitadores = [
    { id: 1, nombre: 'José Ramos', area_conocimiento: 'Marketing', correo: 'joseramos@utpl.edu.ec', estado: 'Activo' },
    { id: 2, nombre: 'Maria Bustamante', area_conocimiento: 'Artes', correo: 'mbustamante3@utpl.edu.ec', estado: 'Ocupado' },
  ];

}
