import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environments } from 'environments/environments.prod';
import { Observable } from 'rxjs';
import { AreasConocimiento } from '../interfaces/areasConocimiento.interfaace';

@Injectable({
  providedIn: 'root'
})
export class AreasConocimientoService {

  private baseUrl: string = environments.baseURL;
  private http = inject( HttpClient );

  getAreasConocimiento(): Observable<AreasConocimiento[]>{
    return this.http.get<AreasConocimiento[]>(`${ this.baseUrl }/api/areas`)
  }

  getAreaConomientoById(id: number): Observable<AreasConocimiento>{
    return this.http.get<AreasConocimiento>(`${this.baseUrl}/api/areas/${ id }`)
  }

}
