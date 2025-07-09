import { Component } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-videos',
  templateUrl: './admin-videos.component.html',
  styleUrls: ['./admin-videos.component.scss']
})
export class AdminVideosComponent {
  nuevoVideo = {
    titulo: '',
    descripcion: '',
    tipo: '',
    url: ''
  };

  constructor(private videoService: VideoService) {}

  agregarVideo(): void {
    if (
      !this.nuevoVideo.titulo ||
      !this.nuevoVideo.descripcion ||
      !this.nuevoVideo.tipo ||
      !this.nuevoVideo.url
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos.',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    
    this.videoService.agregarVideo(this.nuevoVideo).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: '¡Video agregado!',
          text: 'El video se ha guardado correctamente.',
          timer: 2000,
          showConfirmButton: false
        });

        this.nuevoVideo = {
          titulo: '',
          descripcion: '',
          tipo: '',
          url: ''
        };
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo guardar el video.'
        });
      }
    });
  }
}
