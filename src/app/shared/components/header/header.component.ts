import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { circumSquareMore, circumSquareMinus } from '@ng-icons/circum-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive, NgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  viewProviders: [provideIcons({ circumSquareMore, circumSquareMinus })],
})
export class HeaderComponent {
  toggleFlag = false;
  toggleMenu() {
    this.toggleFlag = !this.toggleFlag;
  }
}
