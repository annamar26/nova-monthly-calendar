import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-day-header',
  templateUrl: './day-header.component.html',
  styleUrls: ['./day-header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class DayHeaderComponent {
  @Input() day: undefined | number;
  @Input() date: undefined | Date;
  @Input() hours: number | undefined;

  buttonType: 'day' | 'general' = 'day';
}
