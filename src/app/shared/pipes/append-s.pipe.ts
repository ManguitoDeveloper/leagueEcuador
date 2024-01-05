import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendS',
  standalone: true,
})
export class AppendSPipe implements PipeTransform {
  transform(value: string): string {
    // Replace 'equipo' with 'equipos' in the value
    return value.replace('equipo', 'equipos');
  }
}
