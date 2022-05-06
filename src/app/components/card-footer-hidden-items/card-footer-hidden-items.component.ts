import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FocusCardService } from 'src/app/services/focus-card/focus-card.service';

@Component({
  selector: 'card-footer-hidden-items',
  templateUrl: './card-footer-hidden-items.component.html',
  styleUrls: ['./card-footer-hidden-items.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardFooterHiddenItemsComponent {
  clicked: boolean;
  @Input() hiddenItems!: number;

  constructor(private focusCardService: FocusCardService) {
    this.clicked = this.focusCardService.getState();
  }

  isClicked(event?: Event) {
    if (event) {
      this.focusCardService.changeState(event);
    }
    this.clicked = this.focusCardService.getState();
  }
}
