import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://localhost:3000/api/videos';

  constructor(private http: HttpClient) {}

  obtenerVideos() {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearVideo(video: any) {
    return this.http.post(this.apiUrl, video);
  }
}
