import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-footer-hidden-items',
  templateUrl: './card-footer-hidden-items.component.html',
  styleUrls: ['./card-footer-hidden-items.component.scss'],
})
export class CardFooterHiddenItemsComponent {
  clicked: boolean = false;
  @Input() 'hiddenItems': number;

  isClicked() {
    this.clicked = !this.clicked;
  }
}
