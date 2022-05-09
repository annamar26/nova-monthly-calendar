import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-calendar-header-title',
  templateUrl: './calendar-header-title.component.html',
  styleUrls: ['./calendar-header-title.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarHeaderTitleComponent {
  @Input() headerTitle!: string;

  @Input()
  textColor?: string;

  @Input()
  backgroundColor?: string;

  @Input()
  textWidth: 'bold' | 'bolder' = 'bold';
}
