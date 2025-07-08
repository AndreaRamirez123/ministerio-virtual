import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoService } from '../../services/video.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  tipoSeleccionado = '';
  filtroTipo = '';
  videos: any[] = [];
  videosFiltrados: any[] = [];

  nuevoVideo = {
    titulo: '',
    descripcion: '',
    tipo: '',
    url: ''
  };

  constructor(
    private sanitizer: DomSanitizer,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.cargarVideos();
  }

  cargarVideos(): void {
    this.videoService.obtenerVideos().subscribe(data => {
      this.videos = data.map(video => ({
        ...video,
        url: this.transformarAEmbed(video.url)
      }));
      this.videosFiltrados = this.videos;
    });
  }

  transformarAEmbed(url: string): SafeResourceUrl {
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1].split('&')[0];
    }
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  filtrar(tipo: string): void {
    this.filtroTipo = tipo;
    this.videosFiltrados = tipo
      ? this.videos.filter(video => video.tipo === tipo)
      : this.videos;
  }

  limpiarFiltro(): void {
    this.filtroTipo = '';
    this.videosFiltrados = this.videos;
  }

  filtrarPor(tipo: string): void {
    this.tipoSeleccionado = tipo;
    this.videosFiltrados = tipo
      ? this.videos.filter(video => video.tipo === tipo)
      : this.videos;
  }

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

  const videoAGuardar = {
    ...this.nuevoVideo,
    url: this.transformarAEmbed(this.nuevoVideo.url)
  };

  this.videos.push(videoAGuardar);
  this.videosFiltrados = this.filtroTipo
    ? this.videos.filter(v => v.tipo === this.filtroTipo)
    : this.videos;


  this.nuevoVideo = {
    titulo: '',
    descripcion: '',
    tipo: '',
    url: ''
  };


  Swal.fire({
    icon: 'success',
    title: '¡Video agregado!',
    text: 'El nuevo video se ha guardado correctamente.',
    timer: 2000,
    showConfirmButton: false
  });
}
}
