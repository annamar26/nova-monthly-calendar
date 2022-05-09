import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/interfaces/data-interfaces';
import { Position } from 'src/app/interfaces/popover.interface';
import { OnMouseOverItemService } from 'src/app/services/item-popover/on-mouse-over-item.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PopoverComponent implements OnInit {
  isVisible: boolean = false;
  popoverState$!: Observable<boolean>;
  position$!: Observable<Position>;
  position: Position | undefined = undefined;
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
    activeInProject: false,
  };

  constructor(private onMouseOverItem: OnMouseOverItemService) {}

  ngOnInit(): void {
    this.popoverState$ = this.onMouseOverItem.getState$();
    this.popoverState$.subscribe((res) => {
      this.isVisible = res;
    });
    this.position$ = this.onMouseOverItem.getPosition$();
    this.position$.subscribe((res) => {
      this.position = res;
    });
    this.data$ = this.onMouseOverItem.getData$();
    this.data$.subscribe((res) => {
      this.data = res;
    });
  }

  handleMouseout() {
    this.isVisible = false;
  }

  handleMousemove() {
    this.isVisible = true;
  }
}
