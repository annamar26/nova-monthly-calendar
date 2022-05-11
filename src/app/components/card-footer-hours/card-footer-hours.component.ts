import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'card-footer-hours',
  templateUrl: './card-footer-hours.component.html',
  styleUrls: ['./card-footer-hours.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CardFooterHoursComponent {
  @Input() totalHours!: number;

}
