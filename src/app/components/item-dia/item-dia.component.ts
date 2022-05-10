import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Activity } from 'src/app/interfaces/data-interfaces';
import { Position } from 'src/app/interfaces/popover.interface';
import { OnMouseOverItemService } from 'src/app/services/item-popover/on-mouse-over-item.service';

@Component({
  selector: 'app-item-dia',
  templateUrl: './item-dia.component.html',
  styleUrls: ['./item-dia.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ItemDiaComponent {
  @Input() data: Activity | undefined;

  position!: Position;

  constructor(private onMouseOverItem: OnMouseOverItemService) {}

  handleMouseover(element: HTMLElement): void {
  
    this.onMouseOverItem.showPopover(this.data!, element);
    
 
  }

  handleMouseout(): void {
    this.onMouseOverItem.hidePopover();
    
  }
}
