import { Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/services/data-service/data-interfaces';
import { OnMouseOverItemService, Position } from 'src/app/services/item-popover/on-mouse-over-item.service';

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
  position: Position | undefined ;
  data$!: Observable<Activity>;

  @Input() data: Activity = {
    AccountName: '',
    ActivityDate: '',
    ActivityID: 0,
    CategoryName: '',
    Comments: '',
    EmployeeID: 0,
    ProjectColor: '',
    ProjectID: 0,
    ProjectName: '',
    StepID: 0,
    TypeID: 0,
    value: 0,
    activeInProject: false
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
     
    })
    this.data$ = this.onMouseOverItem.getData$()
    this.data$.subscribe(res => {
      this.data = res;
    
    })
  }

  handleMouseout(){
    this.isVisible = false;
  }

  handleMousemove(){
    this.isVisible = true;
  }
}