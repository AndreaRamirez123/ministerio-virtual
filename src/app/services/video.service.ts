import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://localhost:3000/api/videos';

  constructor(private http: HttpClient) {}

  obtenerVideos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarVideo(video: any): Observable<any> {
    return this.http.post(this.apiUrl, video);
  }
}
