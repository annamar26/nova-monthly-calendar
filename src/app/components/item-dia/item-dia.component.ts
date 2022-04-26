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
export class ItemDiaComponent implements AfterViewInit {

  @Input() data: ItemDia = {
    AccountName: "iTexico",
    ProjectName: "Project",
    CategoryName: "Category",
    ProjectColor: "green"
   
  }
  @ViewChild("colorFlag") flag!: ElementRef

  flagColorElement = undefined

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.flagColorElement = this.flag.nativeElement

 
      this.renderer.removeStyle(this.flagColorElement, "background-color")
      this.renderer.setStyle(this.flagColorElement, "background-color", `${this.data.ProjectColor}`)
   
  }

  
  
 
}
