import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-header-title',
  templateUrl: './calendar-header-title.component.html',
  styleUrls: ['./calendar-header-title.component.scss'],
})
export class CalendarHeaderTitleComponent {
  @Input() 'headerTitle': string;

  @Input()
  textColor?: string;

  @Input()
  backgroundColor?: string;

  @Input()
  textWidth: 'bold' | 'bolder' = 'bold';
}
