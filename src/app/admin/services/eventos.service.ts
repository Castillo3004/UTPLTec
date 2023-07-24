import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environments } from 'environments/environments';
import { Observable, catchError, map, of } from 'rxjs';
import { Eventos } from '../interfaces/eventos.interface';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private baseUrl: string = environments.baseURL;
  private http = inject(HttpClient);



  getEventos(): Observable<Eventos[]>{
    return this.http.get<Eventos[]>(`${ this.baseUrl }/api/eventos`)
  }

  getEventoById(id: number):Observable<Eventos>{
    return this.http.get<Eventos>(`${ this.baseUrl }/api/eventos/${ id }/with-areas`)
  }

  addEvento( evento: Eventos): Observable<Eventos>{
    return this.http.post<Eventos>(`${this.baseUrl}/api/eventos`, evento)
  }

  updateEvento( evento: Eventos): Observable<Eventos>{
    if( !evento.id ) throw Error('Capacitador id is required');

    return this.http.put<Eventos>(`${this.baseUrl}/api/eventos/${ evento.id }`, evento);
  }


  deleteEventoById(id: number): Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/api/eventos/${ id }`).pipe(
      map( resp => true ),
      catchError( err => of(false))
    )
  }


}
