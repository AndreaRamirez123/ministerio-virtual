import { Component, OnInit } from '@angular/core';
import { TestimoniosService } from 'src/app/services/testimonios.service';

@Component({
  selector: 'app-admin-testimonios',
  templateUrl: './admin-testimonios.component.html',
  styleUrls: ['./admin-testimonios.component.scss']
})
export class AdminTestimoniosComponent implements OnInit {
  testimonios: any[] = [];

  constructor(private testimoniosService: TestimoniosService) {}

  ngOnInit(): void {
    this.cargarTestimonios();
  }

  cargarTestimonios() {
    this.testimoniosService.obtenerTestimonios().subscribe((data: any[]) => {
      this.testimonios = data;
    });
  }

  aprobarTestimonio(id: number) {
    this.testimoniosService.actualizarTestimonio(id, { aprobado: 1 }).subscribe(() => {
      this.cargarTestimonios();
    });
  }

  eliminarTestimonio(id: number) {
    this.testimoniosService.eliminarTestimonio(id).subscribe(() => {
      this.cargarTestimonios();
    });
  }
}


