import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { Component } from '@angular/core';
import { circumLinkedin } from '@ng-icons/circum-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  viewProviders: [provideIcons({ circumLinkedin })],
})
export class FooterComponent {}
