import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pais } from 'src/app/models/pais/pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private API_URL = 'https://636c46a7ad62451f9fc6d36f.mockapi.io/pais/';

  constructor(private http: HttpClient) {}

  getPais(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.API_URL);
  }

  addPais(pais: Pais): Observable<Pais> {
    return this.http.post<Pais>(this.API_URL, pais);
  }

  editPais(pais: Pais): Observable<Pais> {
    return this.http.put<Pais>(this.API_URL + pais.id, pais);
  }

  deletePais(pais: Pais): Observable<Pais> {
    return this.http.delete<Pais>(this.API_URL + pais.id);
  }

  getPaisById(id: number): Observable<Pais> {
    return this.http.get<Pais>(this.API_URL + id);
  }

  //Validar que no se repita el nombre del país
  nombreExiste(valor: string): Observable<boolean> {
    return this.http
      .get<Pais[]>(this.API_URL)
      .pipe(map((x) => x.some((pais) => pais.nombre == valor)));
  }
}
