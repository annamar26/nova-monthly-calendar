import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { OnMouseOverItemService, Position } from 'src/app/services/on-mouse-over-item.service';


interface ItemDia{
  AccountName: string;
  ProjectName: string;
  CategoryName: string
  ProjectColor?: string
  }
@Component({
  selector: 'app-item-dia',
  templateUrl: './item-dia.component.html',
  styleUrls: ['./item-dia.component.scss']
})
export class ItemDiaComponent implements OnInit {
  popoverState$!: Observable<boolean>;
  position$!: Observable<Position>;
  position!: Position;

  @Input() data: ItemDia = {
    AccountName: "iTexico",
    ProjectName: "Project",
    CategoryName: "Category",
    ProjectColor: "green"
  }

  constructor(private onMouseOverItem: OnMouseOverItemService){}
  
  ngOnInit(){
    this.popoverState$ = this.onMouseOverItem.getState$()
    this.popoverState$.subscribe(res => console.log(res))
    this.position$ = this.onMouseOverItem.getPosition$()
    this.position$.subscribe(res => {
      this.position = res;
    })
  }
  
  handleMouseover(event:any):void{
    this.onMouseOverItem.showPopover(event);
    //this.posX = event.clientX;
    //this.posY = event.clientY;
  }

  handleMouseout(event:any):void{
    this.onMouseOverItem.hidePopover(event);
  }
}
