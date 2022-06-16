import { Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { Activity } from 'src/app/interfaces/data-interfaces';

@Component({
  selector: 'app-popover-list-footer',
  templateUrl: './popover-list-footer.component.html',
  styleUrls: ['./popover-list-footer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PopoverListFooterComponent implements OnChanges{
  @Input() buttons: string[] = ['update', 'clone', 'delete'];
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

  ngOnChanges(){
    
  }
}
