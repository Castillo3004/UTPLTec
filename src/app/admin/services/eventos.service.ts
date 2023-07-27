import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environments } from 'environments/environments';
import { Observable, catchError, map, of } from 'rxjs';
import { Evento } from '../interfaces/evento.interface';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private baseUrl: string = environments.baseURL;
  private http = inject(HttpClient);



  getEventos(): Observable<Evento[]>{
    return this.http.get<Evento[]>(`${ this.baseUrl }/api/eventos`)
  }

  getEventoById(id: number):Observable<Evento>{
    return this.http.get<Evento>(`${ this.baseUrl }/api/eventos/${ id }/with-areas`)
  }

  addEvento( evento: Evento): Observable<Evento>{
    return this.http.post<Evento>(`${this.baseUrl}/api/eventos`, evento)
  }

  updateEvento( evento: Evento, id: number): Observable<Evento>{
    if( !id ) throw Error('Capacitador id is required');

    return this.http.patch<Evento>(`${this.baseUrl}/api/eventos/${ id }`, evento);
  }


  deleteEventoById(id: number): Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/api/eventos/${ id }`).pipe(
      map( resp => true ),
      catchError( err => of(false))
    )
  }


  // Confirmar y rechazar eventos

  confirmarEvento(eventoId: string): Observable<Evento> {
    const url = `${this.baseUrl}/api/${eventoId}/confirmar`;
    return this.http.put<Evento>(url, {});
  }

  // Método para rechazar el evento
  rechazarEvento(eventoId: string): Observable<Evento> {
    const url = `${this.baseUrl}/api/${eventoId}/rechazar`;
    return this.http.put<Evento>(url, {});
  }


}
