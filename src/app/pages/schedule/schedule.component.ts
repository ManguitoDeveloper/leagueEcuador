import { Component, inject } from '@angular/core';
import { LeagueService } from '../../shared/services/league.service';
import { StadiumSelectorComponent } from './components/stadium-selector/stadium-selector.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';
import { MatchCardComponent } from './components/match-card/match-card.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    DateSelectorComponent,
    StadiumSelectorComponent,
    MatchCardComponent,
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent {
  dataService = inject(LeagueService);
}
