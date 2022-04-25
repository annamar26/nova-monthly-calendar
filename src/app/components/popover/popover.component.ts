import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

interface ItemDay{
  AccountName: string,
  ProjectName: string,
  CategoryName: string;
  ProjectColor?: string;
 
  }
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {
  @Input() data: ItemDay = {
    AccountName: "PRUEBA1",
    ProjectName: "2",
    CategoryName: "3",
    ProjectColor: "",
    

   
  }

  @ViewChild("colorFlag") flag!: ElementRef

  flagColorElement = undefined

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {this.flagColorElement = this.flag.nativeElement
    if(!this.data.ProjectColor){
      this.renderer.removeStyle(this.flagColorElement, "background-color")

      this.renderer.addClass(this.flagColorElement, "red")
    }
    

      this.renderer.removeStyle(this.flagColorElement, "background-color")
      this.renderer.setStyle(this.flagColorElement, "background-color", `${this.data.ProjectColor}`)
    
  

}
}