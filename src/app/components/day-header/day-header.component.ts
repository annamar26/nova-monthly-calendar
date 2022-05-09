import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-day-header',
  templateUrl: './day-header.component.html',
  styleUrls: ['./day-header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class DayHeaderComponent {
  @Input() day: undefined | number;
  @Input() date: Date | undefined;
  @Input() hours: number | undefined;

  buttonType: 'day' | 'general' = 'day';
}
