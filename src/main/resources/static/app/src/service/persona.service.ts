import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './../model/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) { }

  crearPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.baseUrl}/crear`, persona);
  }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.baseUrl}/getPersonas`);
  }

  getPersonaById(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.baseUrl}/editar/${id}`);
  }

  borrarPersona(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  updatePersona(persona:Persona):Observable<Persona> {
     return this.http.post<Persona>(`${this.baseUrl}/update`,persona);
    }

}
