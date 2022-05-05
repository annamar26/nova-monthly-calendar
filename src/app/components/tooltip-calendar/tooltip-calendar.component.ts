import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip-calendar',
  templateUrl: './tooltip-calendar.component.html',
  styleUrls: ['./tooltip-calendar.component.scss'],
})
export class TooltipCalendarComponent {
  @Input() tooltipText!: string;
}
