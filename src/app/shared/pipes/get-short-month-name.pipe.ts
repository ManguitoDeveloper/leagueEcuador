import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getShortMonthName',
  standalone: true,
})
export class GetMonthNamePipe implements PipeTransform {
  transform(date: string, locale: string = 'es'): string {
    const year = Number(date.slice(0, 4));
    const month = Number(date.slice(4, 6));
    const dateObject = new Date(year, month - 1, 1); // month is zero-based
    return dateObject.toLocaleString(locale, { month: 'short' }); // get the abbreviated month name in the specified locale
  }
}
