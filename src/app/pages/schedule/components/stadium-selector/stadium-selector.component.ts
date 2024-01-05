import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { circumLocationOn } from '@ng-icons/circum-icons';
import { LeagueService } from '../../../../shared/services/league.service';
import { Stadiums } from '../../../../shared/models/league.model';

@Component({
  selector: 'stadium-selector',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './stadium-selector.component.html',
  styleUrl: './stadium-selector.component.scss',
  viewProviders: [provideIcons({ circumLocationOn })],
})
export class StadiumSelectorComponent {
  dataService = inject(LeagueService);
  stadiums: Stadiums[] = ['Sixto Durán Ballen', 'La Batea'];
}
