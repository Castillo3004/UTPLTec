import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AreaConocimiento } from 'src/app/admin/interfaces/areasConocimiento.interfaace';
import { Evento } from 'src/app/admin/interfaces/evento.interface';
import { AreasConocimientoService } from 'src/app/admin/services/areas-conocimiento.service';
import { EventosService } from 'src/app/admin/services/eventos.service';

@Component({
  selector: 'admin-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css']
})
export class AgregarEventoComponent implements OnInit{


  currentOption: string = 'Presencial';
  onOptionChange(option: string) {
    this.currentOption = option;
  }

  public areas: AreaConocimiento[] = [];
  public idEvento: number = 0;
  // Obtener fecha actual
  public currentDate = new Date();

  private areasConocimientoService = inject( AreasConocimientoService );
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private eventosService = inject( EventosService );
  private fb = inject( FormBuilder );


  public eventoForm: FormGroup = this.fb.group({
    titulo: new FormControl<string>('', [ Validators.required, Validators.minLength(3)] ),
    descripcion: new FormControl<string>('', [ Validators.required, Validators.minLength(3)] ),
    duracion: new FormControl<number>(0,  [Validators.required, Validators.min(1) ]),
    fecha: new FormControl<Date>(new Date(), [ Validators.required, this.validateFechaActual( this.currentDate ) ]),
    inicioHora: new FormControl<string>('', [Validators.required]),
    modalidad: new FormControl<'Presencial' | 'Virtual'>('Presencial'),
    areaConocimiento: new FormControl<AreaConocimiento | null>(null, [Validators.required]),
  });


  private getAreasConocmiento(){
    this.areasConocimientoService.getAreasConocimiento()
    .subscribe( areas => this.areas = areas );
  }

  get currentEvento(): Evento {
    const selectedAreaId = this.eventoForm.value.areaConocimiento;
    const capacitador: Evento = {
      ...this.eventoForm.value,
      estado: 'Sin Asignación',
      imagen: 'hello-world.png',
      areas: [{ id: selectedAreaId }],
    };
    return capacitador;
  }

  ngOnInit(): void {
    this.getAreasConocmiento();

    if( !this.router.url.includes('admin/eventos/editar')) return;

    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => this.eventosService.getEventoById( id ))
    ).subscribe( evento => {

      if( !evento ){
        return this.router.navigateByUrl('/');
      }

      this.eventoForm.patchValue({
        titulo: evento.titulo,
        descripcion: evento.descripcion,
        duracion: evento.duracion,
        fecha: evento.fecha,
        inicioHora: evento.inicioHora,
        areaConocimiento: evento.areas?.length ? evento.areas[0].id : null,
        modalidad: evento.modalidad,
      });
      return;
    });

  }


  onSubmit(): void {
    if( this.eventoForm.invalid ) {
      this.eventoForm.markAllAsTouched();
      return;
    }

    this.idEvento = this.activatedRoute.snapshot.params['id'];

    if ( this.idEvento ) {
      this.eventosService.updateEvento( this.currentEvento, this.idEvento )
        .subscribe(() => {
          console.log('Evento Actualizado');
        });
      return;
    }

    this.eventosService.addEvento( this.currentEvento )
      .subscribe(() => {
        console.log('Evento Creado');
        this.eventoForm.reset()
      });
  }

  // Captura Errores

  isValidField( field:string ): boolean | null{
    return this.eventoForm.controls[field].errors && this.eventoForm.controls[field].touched
  }

  getFieldError(field: string): string | null{
    if( !this.eventoForm.controls[field] ) return null
    const errors = this.eventoForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch( key ){
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength } caracters.`;
        case 'min':
          return `Debe ser mayor a 0`
        case 'fechaActual':
          return `La fecha debe ser mayor a la actual`
      }
    }

    return null;
  }

  validateFechaActual(currentDate: Date) {
    return (control: AbstractControl): ValidationErrors | null => {
      const selectedDate = new Date(control.value);

      // Agregar un día más a la fecha seleccionada
      selectedDate.setDate(selectedDate.getDate() + 1);

      // Agregar tres horas a la fecha seleccionada
      selectedDate.setHours(selectedDate.getHours() + 3);

      // Comparar las fechas
      if (selectedDate <= currentDate) {
        return { fechaActual: true }; // Retornar un error si la fecha es menor o igual que la actual
      }

      return null; // La fecha es válida
    };
  }
}
