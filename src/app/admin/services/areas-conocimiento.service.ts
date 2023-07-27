import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environments } from 'environments/environments.prod';
import { Observable, catchError, map, of } from 'rxjs';
import { AreaConocimiento } from '../interfaces/areasConocimiento.interfaace';

@Injectable({
  providedIn: 'root'
})
export class AreasConocimientoService {

  private baseUrl: string = environments.baseURL;
  private http = inject( HttpClient );

  getAreasConocimiento(): Observable<AreaConocimiento[]>{
    return this.http.get<AreaConocimiento[]>(`${ this.baseUrl }/api/areas`)
  }

  getAreaConomientoById(id: number): Observable<AreaConocimiento>{
    return this.http.get<AreaConocimiento>(`${this.baseUrl}/api/areas/${ id }`)
  }

  addArea( area: AreaConocimiento ): Observable<AreaConocimiento>{
    return this.http.post<AreaConocimiento>(`${this.baseUrl}/api/areas`, area)
  }

  deleteAreaById( id:number): Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/api/areas/${ id }`).pipe(
      map( resp => true),
      catchError( err => of( false ))
    )
  }



}
