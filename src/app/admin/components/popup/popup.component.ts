import { Component, inject } from '@angular/core';
import { AreaConocimiento } from '../../interfaces/areasConocimiento.interfaace';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AreasConocimientoService } from '../../services/areas-conocimiento.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {


  areas: AreaConocimiento[] = [];


   private dialogRef = inject( MatDialogRef<PopupComponent>);
   private dialog = inject(MatDialog);
   private fb = inject(FormBuilder);
   private areasService = inject( AreasConocimientoService );



  private getAllAreas() {
    this.areasService.getAreasConocimiento()
      .subscribe( areas => this.areas = areas);
  }


  public areaForm: FormGroup = this.fb.group({
    nombreArea: new FormControl<string>('', [ Validators.required, Validators.minLength(3) ]),
  });


  get currentArea(): AreaConocimiento{
    const area: AreaConocimiento = this.areaForm.value;
    return area;
  }


  ngOnInit(): void {
    this.getAllAreas()

  }

  onSubmit(): void {

    if( this.areaForm.invalid ){
      this.areaForm.markAllAsTouched();
      return;
    }

    this.areasService.addArea( this.currentArea )
      .subscribe( () => {
        this.areaForm.reset()
        this.getAllAreas()
      })
  }

  onDeleteArea( id: number ){
    if( !id ) throw Error('Area id is required');

    const dialogRef = this.dialog.open( ConfirmDialogComponent );

    dialogRef.afterClosed().subscribe( (result) =>{
      console.log(result);

      if( result === true){
        this.areasService.deleteAreaById( id ).subscribe( () => {
          this.getAllAreas()
        });
      }
    });
  }


  closeDialog(): void {
    this.dialogRef.close();
  }
  // Captura Errores

  isValidField( field:string ): boolean | null{
    return this.areaForm.controls[field].errors && this.areaForm.controls[field].touched
  }

  getFieldError(field: string): string | null{
    if( !this.areaForm.controls[field] ) return null
    const errors = this.areaForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch( key ){
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength } caracters.`;
      }
    }

    return null;
  }



}
