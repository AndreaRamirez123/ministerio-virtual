import { Component, OnInit } from '@angular/core';
import { DevocionalesService } from 'src/app/services/devocionales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-devocionales',
  templateUrl: './admin-devocionales.component.html',
  styleUrls: ['./admin-devocionales.component.scss']
})
export class AdminDevocionalesComponent implements OnInit {
  nuevoDevocional = {
    titulo: '',
    cita_biblica: '',
    reflexion: '',
    oracion: '',
    fecha_programada: ''
  };

  editandoId: number | null = null;
  devocionales: any[] = [];

  constructor(private devService: DevocionalesService) {}

  ngOnInit() {
    this.obtenerDevocionales();
  }

  obtenerDevocionales() {
    this.devService.obtenerDevocionales().subscribe({
      next: (data) => {
        this.devocionales = data;
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

  private resetForm() {
    this.editandoId = null;
    this.nuevoDevocional = {
      titulo: '',
      cita_biblica: '',
      reflexion: '',
      oracion: '',
      fecha_programada: ''
    };
  }
}


