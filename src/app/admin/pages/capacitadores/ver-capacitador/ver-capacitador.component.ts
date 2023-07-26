import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Capacitador } from 'src/app/admin/interfaces/capacitador.interface';
import { CapacitadoresService } from 'src/app/admin/services/capacitadores.service';

@Component({
  selector: 'app-ver-capacitador',
  templateUrl: './ver-capacitador.component.html',
  styleUrls: ['./ver-capacitador.component.css']
})
export class VerCapacitadorComponent  implements OnInit{

  public capacitador?: Capacitador;

  private activatedRoute = inject(ActivatedRoute);
  private capacitadoresService = inject(CapacitadoresService);
  private router = inject( Router );


  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.capacitadoresService.getCapacitadorById( id ))
    ).subscribe( capacitador => {

      if( !capacitador ) return this.router.navigate(['admin/capacitadores/lista']);

      this.capacitador = capacitador;
      return;

    })
  }

  onDeleteCapacitador( id: number){
    if( !id ) throw Error('Capacitador id is required');

    this.capacitadoresService.deleteCapacitadorById( id ).subscribe( () =>{
      this.router.navigate(['/admin/capacitadores/lista'])
    })
  }

}
