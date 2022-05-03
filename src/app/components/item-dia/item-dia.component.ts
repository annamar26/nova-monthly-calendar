import { Component, Input } from '@angular/core';
import { Activity } from 'src/app/services/data-service/data-interfaces';
import {
  OnMouseOverItemService,
  Position,
} from 'src/app/services/item-popover/on-mouse-over-item.service';

@Component({
  selector: 'app-item-dia',
  templateUrl: './item-dia.component.html',
  styleUrls: ['./item-dia.component.scss'],
})
export class ItemDiaComponent {
  position!: Position;

  @Input() data: Activity = {
    AccountName: 'iTexico',
    ProjectName: 'Project',
    CategoryName: 'Category',
    ProjectColor: 'green',
    ActivityDate: '2022-05-02T15:28:46.493Z',
    ActivityID: 0,
    Comments: 'Este es un comentario',
    EmployeeID: 0,
    ProjectID: 0,
    StepID: 0,
    TypeID: 0,
    value: 8,
    activeInProject: false,
  };
  isShown!: boolean;
  constructor(private onMouseOverItem: OnMouseOverItemService) {}

  handleMouseover(event: any): void {
    this.onMouseOverItem.showPopover(this.data, event);
    this.isShown = true;
  }

  handleMouseout(event: any): void {
    this.onMouseOverItem.hidePopover(event);
    this.isShown = false;
  }
}
