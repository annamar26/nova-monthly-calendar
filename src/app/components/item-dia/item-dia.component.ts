import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';


interface ItemDia{
  project: string;
  category: string;
  color?: string
  }
@Component({
  selector: 'app-item-dia',
  templateUrl: './item-dia.component.html',
  styleUrls: ['./item-dia.component.scss']
})
export class ItemDiaComponent implements AfterViewInit {

  @Input() data: ItemDia = {
    project: "Project",
    category: "Category",
   
  }
  @ViewChild("colorFlag") flag!: ElementRef

  flagColorElement = undefined

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.flagColorElement = this.flag.nativeElement

    if (this.data.color) {
      this.renderer.removeStyle(this.flagColorElement, "background-color")
      this.renderer.setStyle(this.flagColorElement, "background-color", `${this.data.color}`)
    } else {
      this.setColor()
    }
  }

  setColor():void {
    if (this.data.project === "iTexico - Delivery") {
      this.renderer.removeStyle(this.flagColorElement, "background-color")

      this.renderer.addClass(this.flagColorElement, "red")
    } else if (this.data.project == "iTexico - Talent Management") {
      this.renderer.removeStyle(this.flagColorElement, "background-color")
      this.renderer.addClass(this.flagColorElement, "green")

    } else {
      this.renderer.removeStyle(this.flagColorElement, "background-color")
      this.renderer.addClass(this.flagColorElement, "lightgreen")

    }
  }
 
}
