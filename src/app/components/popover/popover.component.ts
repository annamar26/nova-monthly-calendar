import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
  popoverState$!: Subscription;
  position$!:Subscription;
  position: Position | undefined = undefined;
  data$!: Subscription;
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
    this.popoverState$ = this.onMouseOverItem.getState$().subscribe((res) => {
      this.isVisible = res;
    });
    this.position$ = this.onMouseOverItem.getPosition$().subscribe((res) => {
      this.position = res;
    });
    this.data$ = this.onMouseOverItem.getData$().subscribe((res) => {
      this.data = res;
    });
  }
  ngOnDestroy(): void {
    this.data$.unsubscribe();
    this.position$.unsubscribe();
    this.popoverState$.unsubscribe();
  }

  handleMouseout() {
    this.isVisible = false;
  }

  handleMousemove() {
    this.isVisible = true;
  }
}
