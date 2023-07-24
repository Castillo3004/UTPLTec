import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AreasConocimiento } from 'src/app/admin/interfaces/areasConocimiento.interfaace';
import { Capacitadores } from 'src/app/admin/interfaces/capacitadores.interface';

import { AreasConocimientoService } from '../../../services/areas-conocimiento.service';
import { CapacitadoresService } from 'src/app/admin/services/capacitadores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';



@Component({
  selector: 'admin-agregar-capacitadores',
  templateUrl: './agregar-capacitadores.component.html',
  styleUrls: ['./agregar-capacitadores.component.css']
})
export class AgregarCapacitadoresComponent  implements OnInit{

  public areas: AreasConocimiento[] = [];

  private areasConocimientoService = inject( AreasConocimientoService );
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private capacitadoresService = inject( CapacitadoresService );
  private fb = inject( FormBuilder );


  public capacitadorForm: FormGroup = this.fb.group({
    nombreDocente: new FormControl<string>('', [ Validators.required, Validators.minLength(3)] ),
    apellidoDocente: new FormControl<string>('', [ Validators.required, Validators.minLength(3)] ),
    identificacion: new FormControl<string>('', [ Validators.required, Validators.maxLength(10)] ),
    correo: new FormControl<string>('', [ Validators.required, Validators.email]),
    carrera: new FormControl<string>('', [ Validators.required, Validators.minLength(3)] ),
    telefono: new FormControl<string>('', [ Validators.required, Validators.minLength(3)] ),
    areaConocimiento: new FormControl<AreasConocimiento | null>(null),
    descripcion: new FormControl<string>('',)
  });


  private getAreasConocmiento(){
    this.areasConocimientoService.getAreasConocimiento()
      .subscribe( areas => this.areas = areas );
  }


  get currentCapacitador(): Capacitadores {
    const selectedAreaId = this.capacitadorForm.value.areaConocimiento;
    const capacitador: Capacitadores = {
      ...this.capacitadorForm.value,
      estado: 'Activo',
      areas: [{ id: selectedAreaId }],
    };
    return capacitador;
  }


  ngOnInit(): void {
    this.getAreasConocmiento();

    if( !this.router.url.includes('editar')) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => this.capacitadoresService.getCapacitadorById( id )),
    ).subscribe( capacitador => {
      console.log(capacitador);

      if( !capacitador ) {
        return this.router.navigateByUrl('/');
      }


      this.capacitadorForm.patchValue({
        nombreDocente: capacitador.nombreDocente,
        apellidoDocente: capacitador.apellidoDocente,
        identificacion: capacitador.identificacion,
        correo: capacitador.correo,
        carrera: capacitador.carrera,
        telefono: capacitador.telefono,
        areaConocimiento: capacitador.areas?.length ? capacitador.areas[0].id : null,
        descripcion: capacitador.descripcion,
      });
      return;
    })

  }


  onSubmit(): void {
    if (this.capacitadorForm.invalid) return;

    if (this.currentCapacitador.id) {
      this.capacitadoresService.updateCapacitador( this.currentCapacitador )
        .subscribe(() => {
          console.log('Capacitador Actualizado');
        });
      return;
    }

    this.capacitadoresService.addCapacitador( this.currentCapacitador )
      .subscribe(() => {
        console.log('Capacitador Creado');
        this.capacitadorForm.reset()
      });
  }













}
