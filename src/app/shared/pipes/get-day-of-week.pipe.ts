import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDayOfWeek',
  standalone: true,
})
export class GetDayOfWeekPipe implements PipeTransform {
  transform(date: string): string {
    const year = Number(date.slice(0, 4));
    const month = Number(date.slice(4, 6));
    const day = Number(date.slice(6, 8));
    const dateObject = new Date(year, month, day);
    const dayNumber = dateObject.getDay();
    const dayNames = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ];
    const dayName = dayNames[dayNumber];
    return dayName;
  }
}
