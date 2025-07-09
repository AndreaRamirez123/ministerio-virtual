import { Component, OnInit } from '@angular/core';
import { DevocionalesService } from 'src/app/services/devocionales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-devocionales',
  templateUrl: './devocionales.component.html',
  styleUrls: ['./devocionales.component.scss']
})
export class DevocionalesComponent implements OnInit {
  devocionales: any[] = [];
  devocionalDelDia: any;
  paginaActual = 0;

  constructor(private devService: DevocionalesService) { }

  ngOnInit() {
    this.obtenerDevocionales();
  }

obtenerDevocionales() {
  this.devService.obtenerDevocionales().subscribe({
    next: (data) => {
      this.devocionales = data;

      const hoy = new Date().toLocaleDateString('en-CA');
      console.log('🟢 Hoy es:', hoy);
      console.log('📦 Todos los devocionales recibidos:', this.devocionales);

      // Mostrar fechas para comparar
      this.devocionales.forEach((dev, i) => {
        const fecha = dev.fecha_programada?.split('T')[0];
        console.log(`🔎 Devocional #${i + 1} → fecha_programada: ${dev.fecha_programada} | recortada: ${fecha}`);
      });

      const devocionalesHoy = this.devocionales.filter((dev: any) => {
        const fecha = dev.fecha_programada?.split('T')[0];
        return fecha === hoy;
      });

      console.log('📅 Devocionales con fecha de hoy:', devocionalesHoy);
      this.devocionalDelDia = devocionalesHoy[0];

      if (!this.devocionalDelDia) {
        console.warn('⚠️ No hay devocional del día para hoy');
      } else {
        console.log('✅ Devocional del día:', this.devocionalDelDia);
      }
    },
    error: () => {
      Swal.fire('❌ Error', 'No se pudieron cargar los devocionales', 'error');
    }
  });
}



  toggleLike(devocional: any) {
    devocional.likeado = !devocional.likeado;
    devocional.likes = devocional.likes || 0;
    devocional.likes += devocional.likeado ? 1 : -1;
  }

  paginaAnterior() {
    if (this.paginaActual > 0) this.paginaActual--;
  }

  paginaSiguiente() {
    if (this.paginaActual < 3) this.paginaActual++;
  }
}

