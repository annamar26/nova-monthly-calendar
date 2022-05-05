import { Subscription } from 'rxjs';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FocusCardService } from 'src/app/services/focus-card/focus-card.service';
import { Activity } from 'src/app/services/data-service/data-interfaces';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss'],
})
export class DayCardComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() data: Array<Activity> = [
    {
      AccountName: 'Itexico',
      ActivityDate: '',
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
      ActivityDate: '',
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
      ActivityDate: '',
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
      activeInProject: true,
    },
  ];
  totalHours!: number;
  hiddenItems!: number;
  @Input() day!: undefined | number;

  subscription!: Subscription;
  element!: HTMLElement;
  elementSubscription!: Subscription;
  state!: boolean;
  focusableElemenet!: HTMLElement;

  @ViewChild('card') card!: ElementRef;
  constructor(private _focusCardService: FocusCardService) {}

  ngOnInit() {
    this.subscription = this._focusCardService
      .onSubscribe()
      .subscribe((state$) => (this.state = state$));
    this.elementSubscription = this._focusCardService
      .onSubscribeElement()
      .subscribe((element$) => (this.element = element$));

    this.data.forEach((activity) => (this.totalHours += activity.value));

    this.hiddenItems =
      this.data.length <= 3 ? 0 : this.data.length - 3;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngAfterViewInit() {
    this.focusableElemenet = this.card.nativeElement;
  }
}
