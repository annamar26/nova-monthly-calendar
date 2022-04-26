import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

interface ItemDay {
  AccountName: string,
  ProjectName: string,
  CategoryName: string;
  ProjectColor?: string;
  comment: string;
  task: string;
  hours: number;

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
    ProjectColor: "red",
    comment: "comentarios",
    task: "ticket",
    hours: 2,



  }

  @ViewChild("colorFlag") flag!: ElementRef

  flagColorElement = undefined

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.flagColorElement = this.flag.nativeElement
   
    this.renderer.setStyle(this.flagColorElement, "background-color", `${this.data.ProjectColor}`)



  }
}