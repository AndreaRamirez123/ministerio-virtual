import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  palabraDelDia: string = '';
  frases: string[] = [
    '"Porque yo sé los planes que tengo para ti..." - Jeremías 29:11',
    '"El Señor es mi pastor; nada me faltará." - Salmo 23:1',
    '"Todo lo puedo en Cristo que me fortalece." - Filipenses 4:13',
    '"No temas, porque yo estoy contigo." - Isaías 41:10',
    '"El gozo del Señor es mi fortaleza." - Nehemías 8:10'
  ];

  ngOnInit(): void {
    const indice = Math.floor(Math.random() * this.frases.length);
    this.palabraDelDia = this.frases[indice];
  }
}

