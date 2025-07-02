import { Pipe, PipeTransform } from '@angular/core';
import { Musica } from '../services/musica.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(canciones: Musica[], genero: string): Musica[] {
    if (!genero) return canciones;
    return canciones.filter(c => c.genero?.toLowerCase() === genero.toLowerCase());
  }
}
