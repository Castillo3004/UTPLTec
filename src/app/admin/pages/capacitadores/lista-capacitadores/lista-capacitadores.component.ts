import { Component, OnInit, inject } from '@angular/core';
import { Capacitadores } from 'src/app/admin/interfaces/capacitadores.interface';
import { CapacitadoresService } from 'src/app/admin/services/capacitadores.service';

@Component({
  selector: 'admin-lista-capacitadores',
  templateUrl: './lista-capacitadores.component.html',
  styleUrls: ['./lista-capacitadores.component.css']
})
export class ListaCapacitadoresComponent implements OnInit{

  public capacitadores: Capacitadores[] = [];

  private capacitadoresService = inject(CapacitadoresService)


  ngOnInit(): void {
    this.capacitadoresService.getCapacitadores()
      .subscribe( capacitadores => this.capacitadores = capacitadores );

  }


}
