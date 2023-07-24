import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AreasConocimiento } from 'src/app/admin/interfaces/areasConocimiento.interfaace';
import { Eventos } from 'src/app/admin/interfaces/eventos.interface';
import { AreasConocimientoService } from 'src/app/admin/services/areas-conocimiento.service';
import { EventosService } from 'src/app/admin/services/eventos.service';

@Component({
  selector: 'admin-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css']
})
export class AgregarEventoComponent implements OnInit{



  public areas: AreasConocimiento[] = [];

  private areasConocimientoService = inject( AreasConocimientoService );
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private eventosService = inject( EventosService );
  private fb = inject( FormBuilder );


  public eventoForm: FormGroup = this.fb.group({
    titulo: new FormControl<string>('', [ Validators.required, Validators.minLength(3)] ),
    descripcion: new FormControl<string>('', [ Validators.required, Validators.minLength(3)] ),
    duracion: new FormControl<string>(''),
    fecha: new FormControl<Date>(new Date),
    inicioHora: new FormControl<string>(''),
    areaConocimiento: new FormControl<AreasConocimiento | null>(null),
  });


  private getAreasConocmiento(){
    this.areasConocimientoService.getAreasConocimiento()
    .subscribe( areas => this.areas = areas );
  }

  get currentEvento(): Eventos {
    const selectedAreaId = this.eventoForm.value.areaConocimiento;
    const capacitador: Eventos = {
      ...this.eventoForm.value,
      estado: 'Sin Asignación',
      imgen: 'hello-world.png',
      areas: [{ id: selectedAreaId }],
    };
    return capacitador;
  }

  ngOnInit(): void {
    this.getAreasConocmiento();
  }

  onSubmit(): void {
    if (this.eventoForm.invalid) return;

    if (this.currentEvento.id) {
      // this.eventosService.updateEvento( this.currentEvento )
      //   .subscribe(() => {
      //     console.log('Evento Actualizado');
      //   });
      // return;
    }

    this.eventosService.addEvento( this.currentEvento )
      .subscribe(() => {
        console.log('Evento Creado');
        this.eventoForm.reset()
      });
  }
}
