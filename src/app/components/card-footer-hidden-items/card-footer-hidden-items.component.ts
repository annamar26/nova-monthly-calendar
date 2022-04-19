import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-footer-hidden-items',
  templateUrl: './card-footer-hidden-items.component.html',
  styleUrls: ['./card-footer-hidden-items.component.scss'],
})
export class CardFooterHiddenItemsComponent {
  @Input() 'hiddenItems': number;

  constructor() {}
}
