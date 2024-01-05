export interface ListedDates {
  id: number;
  fecha: string;
  fechaNumero?: any;
  fechaTexto: string;
  predeterminado: number;
}

export interface Match {
  id: number;
  fechaNumero: number;
  fechaNumeroTexto: string;
  idLocal: number;
  nombreLocal: string;
  resultadoLocal: number;
  rutaLogoLocal?: string; // Optional property
  idVisita: number;
  nombreVisita: string;
  resultadoVisita: number;
  rutaLogoVisita?: string; // Optional property
  fecha: string;
  fechaTexto: string;
  hora: string;
  horaTexto: string;
  idVocalia: number;
  nombreVocalia: string;
  idEstadio: number;
  nombreEstadio: string;
  ordenEstadio: number;
  colorEstadio: string;
  idEstado: number;
  descripcionEstado: string;
  colorEstado: string;
  select: boolean;
}

export type Stadiums = 'Sixto Durán Ballen' | 'La Batea';
