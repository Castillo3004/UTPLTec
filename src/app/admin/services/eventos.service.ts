import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environments } from 'environments/environments';
import { Observable } from 'rxjs';
import { Eventos } from '../interfaces/eventos.interface';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private baseUrl: string = environments.baseURL;
  private http = inject(HttpClient)

  getEventos(): Observable<Eventos[]>{
    return this.http.get<Eventos[]>(`${ this.baseUrl }/api/eventos`)
  }


}
