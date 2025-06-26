import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Devocional {

  id: number;
  titulo: string;
  cita_biblica: string;
  reflexion: string;
  oracion: string;
  fecha_publicacion: string;
}

@Injectable({
  providedIn: 'root'
})
export class DevocionalesService {
  private apiUrl = 'http://localhost:3000/api/devocionales';

  constructor(private http: HttpClient) { }

  agregarDevocional(devocional: any): Observable<any> {
    return this.http.post(this.apiUrl, devocional);
  }

  obtenerDevocionales(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  eliminarDevocional(id: number) {
    return this.http.delete(`http://localhost:3000/api/devocionales/${id}`);
  }

  editarDevocional(id: number, datos: any) {
    return this.http.put(`${this.apiUrl}/${id}`, datos);
  }

  actualizarDevocional(id: number, devocional: any) {
    return this.http.put(`${this.apiUrl}/${id}`, devocional);
  }

  darLike(id: number) {
    return this.http.put(`${this.apiUrl}/${id}/like`, {});
  }

  quitarLike(id: number) {
    return this.http.put(`${this.apiUrl}/${id}/quitar-like`, {});
  }

  obtenerDevocionalDelDia(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/hoy`);
}


}




