import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/admin/components/confirm-dialog/confirm-dialog.component';
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
  private dialog = inject( MatDialog );


  private getAllEventos(){
    this.eventosService.getEventos()
        .subscribe( eventos => this.eventos = eventos);
  }

  ngOnInit(): void {
      this.getAllEventos();
  }


  onDeleteEvento( id: number ){
    if( !id ) throw Error('Capacitador id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe( ( result ) => {
      if( result === true){
        this.eventosService.deleteEventoById( id ).subscribe( () =>{
          this.getAllEventos()
        });
      }
    });
  }





}
