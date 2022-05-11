import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Card } from 'src/app/interfaces/input.interfaces';

@Component({
  selector: 'app-week-row',
  templateUrl: './week-row.component.html',
  styleUrls: ['./week-row.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WeekRowComponent {
  @Input() cards: Card[] | undefined;
}
