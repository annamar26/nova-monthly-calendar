import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/services/data-service/data-interfaces';

interface Day {
  weeklyDay?: string;
  numberDay?: number;
}
interface Card {
  day: Day;
  activities: Activity[];
}
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  today!: Date;
  month!: number;
  year!: number;
  monthArr: any = [
    [
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 1,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 2,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 3,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 4,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 5,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 6,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 7,
        },
        activities: [],
      },
    ],
    [
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 8,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 9,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 10,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 11,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 12,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 13,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 14,
        },
        activities: [],
      },
    ],
    [
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 15,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 16,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 17,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 18,
        },
        activities: [
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
        ],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 19,
        },
        activities: [
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
        ],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 20,
        },
        activities: [
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
        ],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 21,
        },
        activities: [
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
          {
            AccountName: 'Itexico ',
            ActivityDate: '2011-12-19T15:28:46.493Z',
            ActivityID: 0,
            CategoryName: 'Avalaible',
            Comments: 'Comentario de las actividades realizadas',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'Este es un ticket',
            TypeID: 0,
            value: 8,
            activeInProject: false,
          },
        ],
      },
    ],
    [
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 22,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 23,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 24,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 25,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 26,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 27,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 28,
        },
        activities: [],
      },
    ],
    [
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 29,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 30,
        },
        activities: [],
      },
      {
        day: {
          weeklyDay: 'Monday',
          numberDay: 31,
        },
        activities: [],
      },
      {
        day: {},
        activities: [],
      },
      {
        day: {},
        activities: [],
      },
      {
        day: {},
        activities: [],
      },
      {
        day: {},
        activities: [],
      },
    ],
  ];

  // ngOnInit(): void {
  //   //   this.today = new Date()
  //   //   this.month = new Date().getMonth()
  //   //   this.year = new Date().getFullYear()
  //   //   const firstDayOfWeek: number = new Date(`${this.year}-${this.month+1}-01`).getDay()
  //   //   for(let i= 0; i<=31; i++){
  //   // const day: Day = {}
  //   //   const activities: Activity[]= []

  //   //   }

  // }
}
