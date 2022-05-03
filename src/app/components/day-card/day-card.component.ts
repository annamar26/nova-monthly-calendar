import { Subscription } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FocusCardService } from 'src/app/services/focus-card/focus-card.service';
import { Activity, Project } from 'src/app/services/data-service/data-interfaces';



@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss'],
})
export class DayCardComponent implements OnInit, OnDestroy {
  @Input() data: Array<Activity> =
    [
      {
        AccountName: 'Itexico',  
        ActivityDate: "",
        ActivityID: 0,
        CategoryName: 'Categoria',
        Comments: 'React and storybook1',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Project1',
        StepID: 0,
        Task: 'Nova Menu',
        TypeID: 0,
        value: 2,
        activeInProject: true,
     
    
     
      },
      {
        AccountName: 'Itexico',  
        ActivityDate: "",
        ActivityID: 0,
        CategoryName: 'Categoria',
        Comments: 'React and storybook2',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Project1',
        StepID: 0,
        Task: 'Nova Menu',
        TypeID: 0,
        value: 2,
        activeInProject: true,
      },
      {
        AccountName: 'Itexico',  
        ActivityDate: "",
        ActivityID: 0,
        CategoryName: 'Categoria',
        Comments: 'React and storybook3',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Project1',
        StepID: 0,
        Task: 'Nova Menu',
        TypeID: 0,
        value: 2,
        activeInProject: true
        }
      ]
  totalHours: number = 6
  hiddenItems: number = 2
  day: number = 26

subscription!: Subscription;
state!: boolean;

constructor(private _focusCardService: FocusCardService) { }

ngOnInit() {
  this.subscription = this._focusCardService
    .onSubscribe()
    .subscribe((state$) => (this.state = state$));
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
