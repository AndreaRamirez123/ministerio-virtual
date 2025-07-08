import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {
  private apiUrl = 'http://localhost:3000/api/testimonios';

  constructor(private http: HttpClient) {}

  agregarTestimonio(testimonio: any) {
    return this.http.post(this.apiUrl, testimonio); 
  }

  obtenerTestimonios() {
    return this.http.get<any[]>(this.apiUrl);
  }

  aprobarTestimonio(id: number) {
  return this.http.put(`${this.apiUrl}/${id}/aprobar`, {});
}

eliminarTestimonio(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}`);
}

actualizarTestimonio(id: number, datos: any) {
  return this.http.put(`${this.apiUrl}/${id}`, datos);
}

}



