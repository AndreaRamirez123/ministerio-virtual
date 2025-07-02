import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Musica {
  id: number;
  titulo: string;
  artista: string;
  genero: string;
  url: string;
  tipo: string;
  descripcion: string;
  fecha_publicacion: string;
  liked?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  private apiUrl = 'http://localhost:3000/api/musica';

  constructor(private http: HttpClient) {}

  obtenerMusica(): Observable<Musica[]> {
    return this.http.get<Musica[]>(this.apiUrl);
  }

  agregarMusica(musica: Partial<Musica>): Observable<any> {
    return this.http.post(this.apiUrl, musica);
  }

  subirArchivo(data: FormData): Observable  <any> {
    return this.http.post(this.apiUrl, data);
  }

  darMeGusta(usuarioId: number, musicaId: number) {
  return this.http.post(`${this.apiUrl}/me-gusta`, {
    usuario_id: usuarioId,
    musica_id: musicaId
  });
}

quitarMeGusta(usuarioId: number, musicaId: number) {
  return this.http.request('delete', `${this.apiUrl}/me-gusta`, {
    body: { usuario_id: usuarioId, musica_id: musicaId }
  });
}

}
