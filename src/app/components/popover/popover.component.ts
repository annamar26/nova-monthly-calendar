import { Component, Input} from '@angular/core';

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


}