import { Component, OnInit, inject } from '@angular/core';
import { Capacitador } from 'src/app/admin/interfaces/capacitador.interface';
import { CapacitadoresService } from 'src/app/admin/services/capacitadores.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/admin/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'admin-lista-capacitadores',
  templateUrl: './lista-capacitadores.component.html',
  styleUrls: ['./lista-capacitadores.component.css']
})
export class ListaCapacitadoresComponent implements OnInit{

  public capacitadores: Capacitador[] = [];

  private capacitadoresService = inject(CapacitadoresService)
  private dialog = inject( MatDialog );


  private getAllCapacitadores() {
    this.capacitadoresService.getCapacitadores()
      .subscribe( capacitadores => this.capacitadores = capacitadores );
  }


  ngOnInit(): void {
    this.getAllCapacitadores();
  }



  onDeleteCapacitador(id: number) {
    if (!id) throw Error('Capacitador id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.capacitadoresService.deleteCapacitadorById(id).subscribe(() => {
          this.getAllCapacitadores();
        });
      }
    });
  }


}
