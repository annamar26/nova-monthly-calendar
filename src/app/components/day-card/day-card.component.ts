import { Subscription } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FocusCardService } from 'src/app/services/focus-card/focus-card.service';

interface Data {
  projects: Project[];
  totalHours: number;
  hiddenItems: number;
  day: number;
}

interface Project {
  AccountName: string;
  ProjectName: string;
  CategoryName: string;
  ProjectColor: string;
  Task: string;
  Comment: string;
  hours: number;
}

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss'],
})
export class DayCardComponent implements OnInit, OnDestroy {
  @Input() data: Data = {
    projects: [
      {
        AccountName: 'Itexico',
        ProjectName: 'Project1',
        CategoryName: 'Categoria',
        ProjectColor: 'blue',
        Task: 'Nova Menu',
        Comment: 'React and storybook',
        hours: 2,
      },
      {
        AccountName: 'Itexico',
        ProjectName: 'Project2',
        CategoryName: 'Categoria',
        ProjectColor: 'green',
        Task: 'Nova Calendar',
        Comment: 'Angular and storybook',
        hours: 2,
      },
      {
        AccountName: 'Itexico',
        ProjectName: 'Project3',
        CategoryName: 'Categoria',
        ProjectColor: 'red',
        Task: 'Nova Header',
        Comment: 'React and typescript',
        hours: 2,
      },
    ],
    totalHours: 6,
    hiddenItems: 2,
    day: 26,
  };
  subscription!: Subscription;
  state!: boolean;

  constructor(private _focusCardService: FocusCardService) {}

  ngOnInit() {
    this.subscription = this._focusCardService
      .onSubscribe()
      .subscribe((state$) => (this.state = state$));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
