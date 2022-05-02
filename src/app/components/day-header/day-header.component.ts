import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-header',
  templateUrl: './day-header.component.html',
  styleUrls: ['./day-header.component.scss'],
})
export class DayHeaderComponent {
  @Input() day: number = 1;
  @Input() hours: number = 0;
  buttonType: 'day' | 'general' = 'day'
}
