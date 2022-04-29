import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-footer-hours',
  templateUrl: './card-footer-hours.component.html',
  styleUrls: ['./card-footer-hours.component.scss'],
})
export class CardFooterHoursComponent {
  @Input() totalHours!: number;

}
