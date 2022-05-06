import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Activity } from 'src/app/interfaces/data-interfaces';
import { Position } from 'src/app/interfaces/popover.interface';
import { OnMouseOverItemService } from 'src/app/services/item-popover/on-mouse-over-item.service';

@Component({
  selector: 'app-item-dia',
  templateUrl: './item-dia.component.html',
  styleUrls: ['./item-dia.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ItemDiaComponent {
  @Input() data: Activity | undefined;
  isShown!: boolean;
  position!: Position;

  constructor(private onMouseOverItem: OnMouseOverItemService) {}

  handleMouseover(event: Event): void {
    event.stopPropagation();
    event.cancelBubble;
    this.onMouseOverItem.showPopover(this.data!, event);
    this.isShown = true;
  }

  handleMouseout(): void {
    this.onMouseOverItem.hidePopover();
    this.isShown = false;
  }
}
