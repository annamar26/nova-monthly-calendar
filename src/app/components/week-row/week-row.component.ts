import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/input.interfaces';

@Component({
  selector: 'app-week-row',
  templateUrl: './week-row.component.html',
  styleUrls: ['./week-row.component.scss'],
})
export class WeekRowComponent {
  @Input() cards!: Card[];
}
