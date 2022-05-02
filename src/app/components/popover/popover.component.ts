import { Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { OnMouseOverItemService, Position } from 'src/app/services/on-mouse-over-item.service';

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
export class PopoverComponent implements OnInit{
  isVisible:boolean = false;
  popoverState$!: Observable<boolean>;
  position$!: Observable<Position>;
  position!: Position;

  @Input() data: ItemDay = {
    AccountName: "PRUEBA1",
    ProjectName: "2",
    CategoryName: "3",
    ProjectColor: "red",
    comment: "comentarios",
    task: "ticket",
    hours: 2,
  }

  constructor(private onMouseOverItem: OnMouseOverItemService){}

  ngOnInit(): void {
    this.popoverState$ = this.onMouseOverItem.getState$()
    this.popoverState$.subscribe(res => {
      this.isVisible = res
    })
    this.position$ = this.onMouseOverItem.getPosition$()
    this.position$.subscribe(res => {
      this.position = res;
      console.log(this.position)
    })
  }

  handleMouseout(){
    this.isVisible = false;
  }

  handleMousemove(){
    this.isVisible = true;
  }
}