import { Component } from '@angular/core';

interface EventoProximo {
  descripcion: string,
  imagen: string
}

@Component({
  selector: 'inicio-proximos-cursos',
  templateUrl: './proximos-cursos.component.html',
  styleUrls: ['./proximos-cursos.component.css']
})
export class ProximosCursosComponent {


  public eventosProximos: EventoProximo[] = [
    { descripcion: 'Desde el Grupo de Investigación KBS-RG @UTPL y las carreras @ComputacionUtpl y #TI, realizamos la invitación para el Webinar', imagen: '../../../../../assets/flayer/flayer-1.png' },
    { descripcion: '"Engineering and Technology Projects that promote Sustainable Development in Latin America". La impartirá el Dr. Pritpal Singh, Profesor de Villanova University (Estados Unidos)', imagen: '../../../../../assets/flayer/flayer-2.png' },
    { descripcion: 'El Estudio de Seguimiento a Graduados, por lo que me permito socializarles la siguiente infografía como resumen del Informe de Seguimiento a Graduados del año 2022.', imagen: '../../../../../assets/flayer/flayer-3.png' },
    { descripcion: '#UTPL lidera una iniciativa para comprender y utilizar de manera responsable los medios de comunicación, colaborando estrechamente con la UNESCO en español.', imagen: '../../../../../assets/flayer/flayer-4.png' },
  ]

}
