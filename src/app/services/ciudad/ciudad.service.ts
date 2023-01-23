import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ciudad } from 'src/app/models/ciudad/ciudad';

@Injectable({
  providedIn: 'root',
})
export class CiudadService {
  private API_URL = 'https://636c46a7ad62451f9fc6d36f.mockapi.io/pais/';

  constructor(private http: HttpClient) {}

  getCiudadPorPais(id: number): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.API_URL + id + '/ciudad');
  }

  addCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(
      this.API_URL + ciudad.paisId + '/ciudad',
      ciudad
    );
  }

  editCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.put<Ciudad>(this.API_URL + ciudad.id, ciudad);
  }

  deleteCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.delete<Ciudad>(this.API_URL + ciudad.id);
  }

  getCiudadById(id: number): Observable<Ciudad> {
    return this.http.get<Ciudad>(this.API_URL + id + '/ciudad' + id);
  }

  //Validar que no se repita el nombre del país
  nombreExiste(valor: string): Observable<boolean> {
    return this.http
      .get<Ciudad[]>(this.API_URL)
      .pipe(map((x) => x.some((ciudad) => ciudad.nombre == valor)));
  }
}
