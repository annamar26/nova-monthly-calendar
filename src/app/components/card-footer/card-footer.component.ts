import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
})
export class CardFooterComponent {
  @Input() totalHours!: number;
  @Input() hiddenItems!: number;
}
