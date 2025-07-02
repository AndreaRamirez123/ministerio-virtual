import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DevocionalesService } from 'src/app/services/devocionales.service';

@Component({
  selector: 'app-devocionales',
  templateUrl: './devocionales.component.html',
  styleUrls: ['./devocionales.component.scss']
})
export class DevocionalesComponent implements OnInit {
  nuevoDevocional = {
    titulo: '',
    cita_biblica: '',
    reflexion: '',
    oracion: '',
    fecha_programada: ''
  };

  devocionales: any[] = [];
  devocionalDelDia: any;
  editandoId: number | null = null;
  paginaActual = 0;

  constructor(private devService: DevocionalesService) {}

  ngOnInit() {

    this.obtenerDevocionales();
  }

  obtenerDevocionales() {
    this.devService.obtenerDevocionales().subscribe({
      next: (data) => {
        this.devocionales = data;

        const hoy = new Date().toISOString().split('T')[0];
        this.devocionalDelDia = this.devocionales.find((dev: any) => {
          const fecha = dev.fecha_publicacion?.split('T')[0];
          return fecha === hoy;
        });
      },
      error: () => {
        Swal.fire('❌ Error', 'No se pudieron cargar los devocionales', 'error');
      }
    });
  }

  guardarDevocional() {
    const dev = {
      ...this.nuevoDevocional,
      fecha_programada: this.nuevoDevocional.fecha_programada || new Date().toISOString().slice(0, 10)
    };

    const obs = this.editandoId
      ? this.devService.actualizarDevocional(this.editandoId, dev)
      : this.devService.agregarDevocional(dev);

    obs.subscribe({
      next: () => {
        Swal.fire(
          this.editandoId ? '✅ Actualizado' : '¡Agregado!',
          `Devocional ${this.editandoId ? 'actualizado' : 'guardado'} exitosamente`,
          'success'
        );
        this.resetForm();
        this.obtenerDevocionales();
      },
      error: () => Swal.fire('❌ Error', 'Ocurrió un error', 'error')
    });
  }

  editarDevocional(d: any) {
    this.nuevoDevocional = { ...d };
    this.editandoId = d.id;
  }

  cancelarEdicion() {
    this.resetForm();
  }

  eliminarDevocional(id: number) {
    Swal.fire({
      title: '¿Eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar'
    }).then(res => {
      if (res.isConfirmed) {
        this.devService.eliminarDevocional(id).subscribe(() => {
          Swal.fire('Eliminado', '', 'success');
          this.obtenerDevocionales();
        });
      }
    });
  }

  toggleLike(devocional: any) {
    devocional.likeado = !devocional.likeado;
    devocional.likes = devocional.likes || 0;
    devocional.likes += devocional.likeado ? 1 : -1;

    // Aquí podrías llamar al servicio para guardar los likes
  }

  paginaAnterior() {
    if (this.paginaActual > 0) this.paginaActual--;
  }

  paginaSiguiente() {
    if (this.paginaActual < 3) this.paginaActual++; // 4 páginas: 0,1,2,3
  }

  private resetForm() {
    this.editandoId = null;
    this.paginaActual = 0;
    this.nuevoDevocional = {
      titulo: '',
      cita_biblica: '',
      reflexion: '',
      oracion: '',
      fecha_programada: ''
    };
  }
  anioActual: number = new Date().getFullYear();

}







