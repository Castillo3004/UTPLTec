import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AreaConocimiento } from 'src/app/admin/interfaces/areasConocimiento.interfaace';
import { Capacitador } from 'src/app/admin/interfaces/capacitador.interface';

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

  public areas: AreaConocimiento[] = [];

  private areasConocimientoService = inject( AreasConocimientoService );
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private capacitadoresService = inject( CapacitadoresService );
  private fb = inject( FormBuilder );
  private snackbar = inject( MatSnackBar );

  public idCapacitador: number = 0;


  public capacitadorForm: FormGroup = this.fb.group({
    nombreDocente: new FormControl<string>('', [ Validators.required, Validators.minLength(3)] ),
    apellidoDocente: new FormControl<string>('', [ Validators.required, Validators.minLength(3)] ),
    identificacion: new FormControl<string>('', [ Validators.required, Validators.minLength(3), Validators.maxLength(10)] ),
    correo: new FormControl<string>('', [ Validators.required, Validators.email]),
    carrera: new FormControl<string>('', [ Validators.required, Validators.minLength(3)] ),
    telefono: new FormControl<string>('', [ Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    areaConocimiento: new FormControl<AreaConocimiento | null>(null, Validators.required),
    descripcion: new FormControl<string>('')
  });


  private getAreasConocmiento(){
    this.areasConocimientoService.getAreasConocimiento()
      .subscribe( areas => this.areas = areas );
  }


  get currentCapacitador(): Capacitador {
    const selectedAreaId = this.capacitadorForm.value.areaConocimiento;
    const capacitador: Capacitador = {
      ...this.capacitadorForm.value,
      imagen: 'hello-world.png',
      estado: 'Libre',
      areas: [{ id: selectedAreaId }],
    } as Capacitador;
    return capacitador;
  }


  ngOnInit(): void {
    this.getAreasConocmiento();

    if( !this.router.url.includes('admin/capacitadores/editar')) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => this.capacitadoresService.getCapacitadorById( id ))
    ).subscribe( capacitador => {

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

    if( this.capacitadorForm.invalid ){
      this.capacitadorForm.markAllAsTouched();
      return;
    }

    this.idCapacitador = this.activatedRoute.snapshot.params['id'];

    if ( this.idCapacitador ) {
      this.capacitadoresService.updateCapacitador( this.currentCapacitador, this.idCapacitador )
        .subscribe(() => {
          this.router.navigate(['admin/capacitadores/lista']);
        });
      return;
    }

    this.capacitadoresService.addCapacitador( this.currentCapacitador )
      .subscribe(() => {
        this.capacitadorForm.reset(),
        this.router.navigate(['admin/capacitadores/lista']);
      });
  }

  // Captura Errores

  isValidField( field:string ): boolean | null{
    return this.capacitadorForm.controls[field].errors && this.capacitadorForm.controls[field].touched
  }

  getFieldError(field: string): string | null{
    if( !this.capacitadorForm.controls[field] ) return null
    const errors = this.capacitadorForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch( key ){
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength } caracters.`;
        case 'min':
          return `Debe ser mayor a 0`
        case 'email':
          return `Debe ser tipo email`
      }
    }

    return null;
  }



}
