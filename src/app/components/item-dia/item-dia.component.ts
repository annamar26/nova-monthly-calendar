import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/services/data-service/data-interfaces';
import { OnMouseOverItemService, Position } from 'src/app/services/item-popover/on-mouse-over-item.service';


@Component({
  selector: 'app-item-dia',
  templateUrl: './item-dia.component.html',
  styleUrls: ['./item-dia.component.scss']
})
export class ItemDiaComponent  {
  
    position!: Position;

  @Input() data: Activity = {
    AccountName: "iTexico",
    ProjectName: "Project",
    CategoryName: "Category",
    ProjectColor: "green",
    ActivityDate: "2022-05-02T15:28:46.493Z",
    ActivityID: 0,
    Comments: 'Este es un comentario',
    EmployeeID: 0,
    ProjectID: 0,
    StepID: 0,
    TypeID: 0,
    value: 8,
    activeInProject: false
  }
isShown!: boolean
  constructor(private onMouseOverItem: OnMouseOverItemService){}
  

  
  handleMouseover(event:any):void{
    event.stopImmediatePropagation();
  
  
    this.isShown= true
    this.onMouseOverItem.showPopover( this.data, event);
    //this.posX = event.clientX;
    //this.posY = event.clientY;
  }

  handleMouseout(event:any):void{
    
    event.stopImmediatePropagation()
    this.isShown= false
    this.onMouseOverItem.hidePopover(event);
  }
}
