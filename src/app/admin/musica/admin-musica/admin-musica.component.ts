import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MusicaService } from 'src/app/services/musica.service';

@Component({
  selector: 'app-admin-musica',
  templateUrl: './admin-musica.component.html',
  styleUrls: ['./admin-musica.component.scss']
})
export class AdminMusicaComponent implements OnInit {
  formularioMusica!: FormGroup;
  archivoSeleccionado: File | null = null;

  constructor(private musicaService: MusicaService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formularioMusica = this.fb.group({
      titulo: ['', Validators.required],
      artista: ['', Validators.required],
      genero: ['', Validators.required],
      descripcion: ['']
    });
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
      },
      error: (error) => {
        console.error('Error detallado:', error);
        alert('❌ Error al subir la canción');
      }
    });
  }
}
