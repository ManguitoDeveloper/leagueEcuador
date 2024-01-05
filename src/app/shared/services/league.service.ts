import { HttpClient } from '@angular/common/http';
import { Injectable, computed, effect, signal } from '@angular/core';
import { ListedDates, Match, Stadiums } from '../models/league.model';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  baseUrl = 'http://186.4.251.123:8083/deportivo/api/deportivo/';

  dates = signal<ListedDates[]>([]);
  selectedDate = signal<string>('');
  selectedStadium = signal<Stadiums>('Sixto Durán Ballen');
  #matches = signal<Match[]>([]);
  #firstTimeLoad = true;

  constructor(private http: HttpClient) {
    this.getDates('calendario/fechas/0/1');
    effect(() => {
      if (this.dates().length > 0 && this.#firstTimeLoad) {
        this.getProgramacion(
          this.dates().find((date) => date.predeterminado != 0)!.fecha,
          this.dates().find((date) => date.predeterminado != 0)!.fechaTexto
        );
        this.#firstTimeLoad = false;
      }
    });
  }

  getDates(url: string) {
    this.http.get(this.baseUrl + url).subscribe({
      next: (data: any) => this.dates.set(data),
      error: (error: any) => console.error(error),
      complete: () => console.log('Dates fetched successfully'),
    });
  }

  getProgramacion(fecha: string, fechaTexto: string) {
    this.http.get(this.baseUrl + 'programacion/2/0/0/0/0/' + fecha).subscribe({
      next: (data: any) => {
        this.#matches.set(data);
        this.selectedDate.set(fechaTexto);
      },
      error: (error: any) => console.error(error),
      complete: () => console.log('Matches fetched successfully'),
    });
  }

  filteredMatchesByStadium = computed(() => {
    const stadium = this.selectedStadium();
    const matches = this.#matches();
    switch (stadium) {
      case 'Sixto Durán Ballen':
        return matches.filter(
          (match) => match.nombreEstadio === 'Sixto Durán Ballen'
        );
      case 'La Batea':
        return matches.filter((match) => match.nombreEstadio === 'La Batea');
    }
  });

  changeStadium(filter: Stadiums): void {
    this.selectedStadium.set(filter);
  }
}
