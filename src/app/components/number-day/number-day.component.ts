import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-day',
  templateUrl: './number-day.component.html',
  styleUrls: ['./number-day.component.scss']
})
export class NumberDayComponent {
  @Input() dayNumber: number | undefined = 1;
}
