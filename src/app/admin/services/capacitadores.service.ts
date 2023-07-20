import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environments } from 'environments/environments';
import { Observable } from 'rxjs';
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
}
