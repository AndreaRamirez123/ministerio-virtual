import { Component, OnInit } from '@angular/core';
import { TestimoniosService } from 'src/app/services/testimonios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss']
})
export class TestimoniosComponent implements OnInit {
  testimonio = {
    nombre_persona: '',
    email: '',
    testimonio: ''
  };

  testimonios: any[] = [];
  testimoniosMostrados: any[] = [];
  cantidadVisible = 8;

  constructor(private testimoniosService: TestimoniosService) { }

  ngOnInit(): void {
    this.obtenerTestimonios();
  }

  obtenerTestimonios() {

    const colores = ['pastel-1', 'pastel-2', 'pastel-3', 'pastel-4', 'pastel-5', 'pastel-6', 'pastel-7', 'pastel-8'];

    this.testimoniosService.obtenerTestimonios().subscribe((data: any[]) => {
      this.testimonios = data.filter(t => t.aprobado == 1)
        .map(t => ({
          ...t,
          color: colores[Math.floor(Math.random() * colores.length)]
        }));

      this.testimoniosMostrados = this.testimonios.slice(0, this.cantidadVisible);
    });


  }

  verMas() {
    this.cantidadVisible += 6;
    this.testimoniosMostrados = this.testimonios.slice(0, this.cantidadVisible);
  }


  guardarTestimonio() {
    if (!this.testimonio.nombre_persona || !this.testimonio.testimonio) {
      return;
    }

    const colores = ['pastel-1', 'pastel-2', 'pastel-3', 'pastel-4', 'pastel-5', 'pastel-6'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    const nuevoTestimonio = {
      ...this.testimonio,
      fecha_envio: new Date(),
      aprobado: 1,
      color: colorAleatorio
    };

    this.testimoniosService.agregarTestimonio(nuevoTestimonio).subscribe({
      next: () => {
        this.testimonio = {
          nombre_persona: '',
          email: '',
          testimonio: ''
        };

        Swal.fire({
          title: '¡Gracias por compartir!',
          text: 'Tu testimonio ha sido enviado con éxito.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#8e0562'
        });

        this.obtenerTestimonios();
      },
      error: (err) => {
        console.error("Error al enviar testimonio", err);

        Swal.fire({
          title: 'Oops',
          text: 'Hubo un error al enviar tu testimonio',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });
  }
}






