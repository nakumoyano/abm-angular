import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/persona/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private API_URL = 'https://636c46a7ad62451f9fc6d36f.mockapi.io/persona/';

  constructor(private http: HttpClient) {}

  getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.API_URL);
  }

  addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.API_URL, persona);
  }

  editPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.API_URL + persona.id, persona);
  }

  deletePersona(persona: Persona): Observable<Persona> {
    return this.http.delete<Persona>(this.API_URL + persona.id);
  }

  getPersonaById(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.API_URL + id);
  }
}
