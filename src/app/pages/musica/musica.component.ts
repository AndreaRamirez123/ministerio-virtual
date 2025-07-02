import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MusicaService, Musica } from 'src/app/services/musica.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})
export class MusicaComponent implements OnInit {
  canciones: Musica[] = [];
  filtroGenero: string = '';
  formularioMusica!: FormGroup;
  archivoSeleccionado: File | null = null;

  constructor(private musicaService: MusicaService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioMusica = this.fb.group({
      titulo: ['', Validators.required],
      artista: ['', Validators.required],
      genero: ['', Validators.required],
      descripcion: ['']
    });

    this.cargarCanciones();
  }

  cargarCanciones(): void {
    this.musicaService.obtenerMusica().subscribe(data => {
      this.canciones = data.map(c => ({
        ...c,
        url: 'http://localhost:3000' + encodeURI(c.url),
        liked: false
      }));
    });
  }

  filtrarPorGenero(genero: string): void {
    this.filtroGenero = genero;
  }

  limpiarFiltro(): void {
    this.filtroGenero = '';
  }

  onArchivoSeleccionado(event: any): void {
    this.archivoSeleccionado = event.target.files[0];
  }

  enviarCancion(): void {
    if (this.formularioMusica.invalid || !this.archivoSeleccionado) return;

    const formData = new FormData();
    formData.append('titulo', this.formularioMusica.value.titulo);
    formData.append('artista', this.formularioMusica.value.artista);
    formData.append('genero', this.formularioMusica.value.genero);
    formData.append('descripcion', this.formularioMusica.value.descripcion);
    formData.append('archivo', this.archivoSeleccionado);

    this.musicaService.subirArchivo(formData).subscribe({
      next: () => {
        alert('✅ Canción subida correctamente');
        this.formularioMusica.reset();
        this.archivoSeleccionado = null;
        this.cargarCanciones();
      },
      error: (error) => {
        console.error('Error detallado:', error);
        alert('❌ Error al subir la canción');
      }

    });
  }
  togglePlay(audio: HTMLAudioElement): void {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

retroceder(audio: HTMLAudioElement): void {
  audio.currentTime = Math.max(0, audio.currentTime - 5);
}

avanzar(audio: HTMLAudioElement): void {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
}

cambiarTiempo(event: any, audio: HTMLAudioElement): void {
  audio.currentTime = event.target.value;
}

toggleLike(cancion: Musica): void {
  const usuarioId = 1; // ← por ahora, simulado

  if (!cancion.liked) {
    this.musicaService.darMeGusta(usuarioId, cancion.id).subscribe(() => {
      cancion.liked = true;
    });
  } else {
    this.musicaService.quitarMeGusta(usuarioId, cancion.id).subscribe(() => {
      cancion.liked = false;
    });
  }
}

compartirCancion(cancion: Musica): void {
  const url = window.location.origin + cancion.url;
  navigator.clipboard.writeText(url).then(() => {
    alert('🔗 Enlace copiado al portapapeles: ' + url);
  }, () => {
    alert('❌ No se pudo copiar el enlace.');
  });
}

}
