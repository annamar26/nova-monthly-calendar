import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FocusCardService } from 'src/app/services/focus-card/focus-card.service';

@Component({
  selector: 'card-footer-hidden-items',
  templateUrl: './card-footer-hidden-items.component.html',
  styleUrls: ['./card-footer-hidden-items.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CardFooterHiddenItemsComponent {
  clicked: boolean;
  @Input() hiddenItems!: number;
  get focusCardService(): FocusCardService {
    return this._focusCardService;
  }

  constructor(private _focusCardService: FocusCardService) {
    this.clicked = this._focusCardService.getState();
  }

  isClicked(event?: Event): void {
    if (event) {
      this._focusCardService.changeState(event.composedPath()[5]);
    }
    this.clicked = this._focusCardService.getState();
  }
}
