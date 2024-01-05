import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  circumCalendar,
  circumSquareChevRight,
  circumSquareChevLeft,
} from '@ng-icons/circum-icons';
import { LeagueService } from '../../../../shared/services/league.service';
import { GetShortDayOfWeekPipe } from '../../../../shared/pipes/get-short-day-of-week.pipe';
import { GetMonthNamePipe } from '../../../../shared/pipes/get-short-month-name.pipe';

@Component({
  selector: 'date-selector',
  standalone: true,
  imports: [NgIconComponent, GetShortDayOfWeekPipe, GetMonthNamePipe],
  templateUrl: './date-selector.component.html',
  styleUrl: './date-selector.component.scss',
  viewProviders: [
    provideIcons({
      circumCalendar,
      circumSquareChevLeft,
      circumSquareChevRight,
    }),
  ],
})
export class DateSelectorComponent implements AfterViewChecked {
  dataService = inject(LeagueService);
  firstTime = false;

  @ViewChild('scrollContent', { read: ElementRef }) scrollContent!: ElementRef;

  ngAfterViewChecked(): void {
    try {
      if (!this.firstTime) {
        this.scrollToSelected();
        this.firstTime = !this.firstTime;
      }
    } catch (e) {}
  }

  scrollLeft() {
    this.scrollContent.nativeElement.scrollTo({
      left: this.scrollContent.nativeElement.scrollLeft - 250,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    // Check if the element can scroll right
    if (
      this.scrollContent.nativeElement.scrollLeft <
      this.scrollContent.nativeElement.scrollWidth -
        this.scrollContent.nativeElement.clientWidth
    ) {
      this.scrollContent.nativeElement.scrollTo({
        left: this.scrollContent.nativeElement.scrollLeft + 200,
        behavior: 'smooth',
      });
    } else {
      // If the element can't scroll right anymore, go to the start
      this.scrollContent.nativeElement.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  scrollToSelected() {
    // Find the element with the 'selected' class
    const selectedElement =
      this.scrollContent.nativeElement.querySelector('.selected');
    // Scroll the element into view
    selectedElement.scrollIntoView({
      block: 'center', // align the element horizontally in the center
      inline: 'center', // align the element horizontally in the center
      behavior: 'smooth', // use smooth scrolling animation
    });
  }
}
