import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.scss']
})
export class DonacionesComponent implements OnInit {
  @ViewChild('formulario') formulario!: ElementRef;

  mostrarToast = false;

  ngOnInit(): void { }

  scrollAlFormulario() {
    const formulario = document.getElementById('formulario-donacion');
    if (formulario) {
      formulario.scrollIntoView({ behavior: 'smooth' });
    }

    this.mostrarToast = true;
    setTimeout(() => {
      this.mostrarToast = false;
    }, 3000);
  }

  opcionesDonacion = [
    { icono: '💰', titulo: 'Dinero', descripcion: 'Puedes apoyar con transferencias seguras o efectivo.' },
    { icono: '🥫', titulo: 'Comida', descripcion: 'Recibimos alimentos no perecederos o frescos para familias.' },
    { icono: '👕', titulo: 'Ropa', descripcion: 'Ropa nueva o usada en buen estado para todas las edades.' },
    { icono: '🧸', titulo: 'Juguetes', descripcion: 'Regala sonrisas con juguetes en buen estado.' },
    { icono: '🐶', titulo: 'Mascotas', descripcion: 'Comida y elementos para ayudar a animalitos vulnerables.' }
  ];

  categoriaSeleccionada: string = '';

  donacion = {
    nombre: '',
    email: '',
    categoria: '',
    mensaje: '',
    direccion: '',
    medioPago: ''
  };

  seleccionarCategoria(categoria: string) {
    this.donacion.categoria = categoria;
    this.categoriaSeleccionada = categoria;
    this.scrollAlFormulario();
  }

  constructor(private http: HttpClient) { }

  enviarDonacion() {
    const { nombre, email, categoria } = this.donacion;

    if (!nombre || !email || !categoria) {
      alert('Por favor, completa todos los campos requeridos 🙏');
      return;
    }

    this.http.post('http://localhost:3000/api/donaciones', this.donacion).subscribe({
      next: (respuesta) => {
        alert('¡Gracias por tu generosidad! 💖');

        this.donacion = {
          nombre: '',
          email: '',
          categoria: '',
          mensaje: '',
          direccion: '',
          medioPago: ''
        };
        this.categoriaSeleccionada = '';

      },
      error: (error) => {
        console.error('Error al enviar la donación:', error);
        alert('Ocurrió un error al registrar la donación. Inténtalo nuevamente 🙏');
      }
    })



  }

  seleccionarMedioPago(metodo: string) {
    this.donacion.medioPago = metodo;
  }

  coordinacionEntrega() {
    this.donacion.direccion = 'Coordinar con el equipo';
    alert('Te contactaremos para coordinar la direccion de entrega 🙌');
  }

}
