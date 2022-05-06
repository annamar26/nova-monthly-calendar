import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardFooterComponent {
  @Input() totalHours!: number;
  @Input() hiddenItems!: number;
}
