import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';


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
export class ItemDiaComponent  {

  @Input() data: ItemDia = {
    AccountName: "iTexico",
    ProjectName: "Project",
    CategoryName: "Category",
    ProjectColor: "green"
   
  }
  
  
  
 
}
