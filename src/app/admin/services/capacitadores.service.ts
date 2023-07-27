import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { environments } from 'environments/environments';
import { Observable, catchError, map, of } from 'rxjs';
import { Capacitador } from '../interfaces/capacitador.interface';



@Injectable({
  providedIn: 'root'
})
export class CapacitadoresService {

  private baseUrl: string = environments.baseURL;
  private http = inject(HttpClient)



  getCapacitadores():Observable<Capacitador[]>{
    return this.http.get<Capacitador[]>(`${this.baseUrl}/api/docentes`);
  }

  getCapacitadorById(id: number):Observable<Capacitador>{
    return this.http.get<Capacitador>(`${ this.baseUrl }/api/docentes/${ id }/with-areas`)
  }

  addCapacitador( capacitador: Capacitador): Observable<Capacitador>{
    return this.http.post<Capacitador>(`${this.baseUrl}/api/docentes`, capacitador)
  }


  updateCapacitador( capacitador: Capacitador, id: number): Observable<Capacitador>{
    if( !id ) throw Error('Capacitador id is required');

    return this.http.patch<Capacitador>(`${this.baseUrl}/api/docentes/${ id }`, capacitador);
  }


  deleteCapacitadorById(id: number): Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/api/docentes/${ id }`).pipe(
      map( resp => true ),
      catchError( err => of(false))
    )
  }


  // Envio de Correo
  enviarCorreo(
    docenteId: number,
    correoDocente: string,
    eventoId: number
  ): Observable<any> {
    // Realiza el proceso de envío del correo utilizando HttpClient y el endpoint de tu backend
    const data = { id: docenteId, correo: correoDocente, idEvento: eventoId };
    console.log(docenteId);

    return this.http.post<any>(`${this.baseUrl}/api/mail/enviar-correo`, data);
  }

}
