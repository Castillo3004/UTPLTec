import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { environments } from 'environments/environments';
import { Observable, catchError, map, of } from 'rxjs';
import { Capacitadores } from '../interfaces/capacitadores.interface';


@Injectable({
  providedIn: 'root'
})
export class CapacitadoresService {

  private baseUrl: string = environments.baseURL;
  private http = inject(HttpClient)



  getCapacitadores():Observable<Capacitadores[]>{
    return this.http.get<Capacitadores[]>(`${this.baseUrl}/api/docentes`);
  }

  getCapacitadorById(id: number):Observable<Capacitadores>{
    return this.http.get<Capacitadores>(`${ this.baseUrl }/api/docentes/${ id }/with-areas`)
  }

  addCapacitador( capacitador: Capacitadores): Observable<Capacitadores>{
    return this.http.post<Capacitadores>(`${this.baseUrl}/api/docentes`, capacitador)
  }


  updateCapacitador( capacitador: Capacitadores): Observable<Capacitadores>{
    if( !capacitador.id ) throw Error('Capacitador id is required');

    return this.http.put<Capacitadores>(`${this.baseUrl}/api/docentes/${ capacitador.id }`, capacitador);
  }


  deleteCapacitadorById(id: number): Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/api/docentes/${ id }`).pipe(
      map( resp => true ),
      catchError( err => of(false))
    )
  }
}
