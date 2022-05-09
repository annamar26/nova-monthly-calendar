import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-number-day',
  templateUrl: './number-day.component.html',
  styleUrls: ['./number-day.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NumberDayComponent {
  @Input() dayNumber: number | undefined = 1;
}
