import { NgOptimizedImage } from '@angular/common';
import { Match } from './../../../../shared/models/league.model';
import { Component, Input } from '@angular/core';
import { AppendSPipe } from '../../../../shared/pipes/append-s.pipe';

@Component({
  selector: 'match-card',
  standalone: true,
  imports: [NgOptimizedImage, AppendSPipe],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.scss',
})
export class MatchCardComponent {
  imageLoaded: boolean = false;
  @Input() match!: Match;
  imageBaseUrl = 'http://deportivo2.edbsharks.com/assets';
  teamLogoPlaceholder =
    'http://deportivo2.edbsharks.com/assets/equipos/escudo.png';
}
