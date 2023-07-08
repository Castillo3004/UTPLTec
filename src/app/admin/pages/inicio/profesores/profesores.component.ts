import { Component } from '@angular/core';

interface Profesor {
  nombre: string,
  celular: string,
  fecha: string,
  correo: string
}


@Component({
  selector: 'inicio-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent {

  public profesores:Profesor[] = [
    { nombre: 'Maria Soto', celular: '0978451265', fecha: '12/06/2023', correo: 'marias2@utpl.edu.ec'},
    { nombre: 'Fabian Gaona', celular: '0978562315', fecha: '12/06/2023', correo: 'fgaona3@utpl.edu.ec'},
    { nombre: 'Ramiro Cabrera', celular: '0986537615', fecha: '20/06/2023', correo: 'ramiro4@utpl.edu.ec'},
    { nombre: 'Jorge Maza', celular: '0925673546', fecha: '25/07/2023', correo: 'jmaza3@utpl.edu.ec'},
    { nombre: 'Fernada Ramos', celular: '0965342578', fecha: '20/08/2023', correo: 'ferramos17@utpl.edu.ec'},
    { nombre: 'Gabriela Paez', celular: '0986542634', fecha: '1/08/2023', correo: 'gpaez3@utpl.edu.ec'},
    { nombre: 'Ronal Soria', celular: '0925673540', fecha: '25/07/2023', correo: 'ronals12@utpl.edu.ec'},
    { nombre: 'Carmen Ramos', celular: '0960042578', fecha: '20/08/2023', correo: 'carmenra5@utpl.edu.ec'},
  ]


}
