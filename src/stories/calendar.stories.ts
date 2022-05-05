import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { WeekRowComponent } from '../app/components/week-row/week-row.component';
import { DayCardComponent } from '../app/components/day-card/day-card.component';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { CalendarHeaderTitleComponent } from 'src/app/components/calendar-header-title/calendar-header-title.component';
import { CalendarHeaderComponent } from 'src/app/components/calendar-header/calendar-header.component';
import { DayHeaderComponent } from 'src/app/components/day-header/day-header.component';
import { AddActivityButtonComponent } from 'src/app/components/add-activity-button/add-activity-button.component';
import { CardFooterHiddenItemsComponent } from 'src/app/components/card-footer-hidden-items/card-footer-hidden-items.component';
import { CardFooterHoursComponent } from 'src/app/components/card-footer-hours/card-footer-hours.component';
import { CardFooterComponent } from 'src/app/components/card-footer/card-footer.component';
import { ItemDiaComponent } from 'src/app/components/item-dia/item-dia.component';
import { ListaDiaComponent } from 'src/app/components/lista-dia/lista-dia.component';
import { NumberDayComponent } from 'src/app/components/number-day/number-day.component';
import { PopoverBodyTextComponent } from 'src/app/components/popover-body-text/popover-body-text.component';
import { PopoverBodyComponent } from 'src/app/components/popover-body/popover-body.component';
import { PopoverButtonComponent } from 'src/app/components/popover-button/popover-button.component';
import { PopoverListFooterComponent } from 'src/app/components/popover-list-footer/popover-list-footer.component';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { TooltipCalendarComponent } from 'src/app/components/tooltip-calendar/tooltip-calendar.component';
import { WarningDayComponent } from 'src/app/components/warning-day/warning-day.component';
import { PItemDiaComponent } from 'src/app/components/p-item-dia/p-item-dia.component';

export default {
  title: 'Calendar/Calendar',
  component: CalendarComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        WeekRowComponent,
        DayCardComponent,
        CalendarHeaderComponent,
        CalendarHeaderTitleComponent,
        ListaDiaComponent,
        PItemDiaComponent,
        DayHeaderComponent,
        CardFooterComponent,
        CardFooterHoursComponent,
        CardFooterHiddenItemsComponent,
        WarningDayComponent,
        NumberDayComponent,
        TooltipCalendarComponent,
        AddActivityButtonComponent,
        ListaDiaComponent,
        ItemDiaComponent,
        PopoverBodyComponent,
        PopoverBodyTextComponent,
        PopoverButtonComponent,
        PopoverListFooterComponent,
        PopoverComponent,
        PopoverComponent,
        PopoverBodyComponent,
        PopoverBodyTextComponent,
        CardFooterHoursComponent,
        PopoverButtonComponent,
        PopoverListFooterComponent,
      ],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<CalendarComponent> = (args: CalendarComponent) => ({
  props: args,
});

export const Calendar = Template.bind({});
Calendar.args = {
  monthArr: [
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
    ],
  ],
};
