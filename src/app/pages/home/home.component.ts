import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mensajes: string[] = [
    'Dios tiene algo nuevo para ti hoy 💖',
    'Él renueva tus fuerzas como el águila 🦅',
    'Confía en Su plan, Él no falla 🙏',
    'Tu propósito es eterno, no te rindas 🌟',
    'Jesús es tu refugio en la tormenta 🌈',
    'La fe mueve montañas, ¡créele! ⛰️'
  ];

  mensajeDelDia: string = '';

  ngOnInit(): void {
    this.mensajeDelDia = this.obtenerMensajeAleatorio();
  }

  obtenerMensajeAleatorio(): string {
    const indice = Math.floor(Math.random() * this.mensajes.length);
    return this.mensajes[indice];
  }
}


