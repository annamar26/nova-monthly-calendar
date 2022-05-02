import { Component, Input } from '@angular/core';
import { FocusCardService } from 'src/app/services/focus-card/focus-card.service';

@Component({
  selector: 'card-footer-hidden-items',
  templateUrl: './card-footer-hidden-items.component.html',
  styleUrls: ['./card-footer-hidden-items.component.scss'],
})
export class CardFooterHiddenItemsComponent {
  clicked: boolean;
  @Input() 'hiddenItems': number;

  constructor(private focusCardService: FocusCardService) {
    this.clicked = this.focusCardService.getState();
  }

  isClicked() {
    this.focusCardService.changeState();
    this.clicked = this.focusCardService.getState();
  }
}
