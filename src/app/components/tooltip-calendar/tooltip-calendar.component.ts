import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tooltip-calendar',
  templateUrl: './tooltip-calendar.component.html',
  styleUrls: ['./tooltip-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipCalendarComponent {
  @Input() tooltipText!: string;
}
