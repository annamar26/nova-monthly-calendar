import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { WeekRowComponent } from '../app/components/week-row/week-row.component';
import { DayCardComponent } from '../app/components/day-card/day-card.component';
import { AddActivityButtonComponent } from 'src/app/components/add-activity-button/add-activity-button.component';
import { CalendarHeaderTitleComponent } from 'src/app/components/calendar-header-title/calendar-header-title.component';
import { CalendarHeaderComponent } from 'src/app/components/calendar-header/calendar-header.component';
import { CardFooterHiddenItemsComponent } from 'src/app/components/card-footer-hidden-items/card-footer-hidden-items.component';
import { CardFooterHoursComponent } from 'src/app/components/card-footer-hours/card-footer-hours.component';
import { CardFooterComponent } from 'src/app/components/card-footer/card-footer.component';
import { DayHeaderComponent } from 'src/app/components/day-header/day-header.component';
import { ItemDiaComponent } from 'src/app/components/item-dia/item-dia.component';
import { ListaDiaComponent } from 'src/app/components/lista-dia/lista-dia.component';
import { NumberDayComponent } from 'src/app/components/number-day/number-day.component';
import { PItemDiaComponent } from 'src/app/components/p-item-dia/p-item-dia.component';
import { PopoverBodyTextComponent } from 'src/app/components/popover-body-text/popover-body-text.component';
import { PopoverBodyComponent } from 'src/app/components/popover-body/popover-body.component';
import { PopoverButtonComponent } from 'src/app/components/popover-button/popover-button.component';
import { PopoverListFooterComponent } from 'src/app/components/popover-list-footer/popover-list-footer.component';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { TooltipCalendarComponent } from 'src/app/components/tooltip-calendar/tooltip-calendar.component';
import { WarningDayComponent } from 'src/app/components/warning-day/warning-day.component';

export default {
    title: 'Calendar/Week Row',
    component: WeekRowComponent,
    decorators: [
        moduleMetadata({
            declarations: [DayCardComponent, 
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
              PopoverListFooterComponent,],
            imports: [CommonModule]
        })
    ]
} as Meta;

const Template: Story<WeekRowComponent> = (args: WeekRowComponent) => ({
    props: args,
});

export const Week_Row = Template.bind({});
Week_Row.args = {
    cards:[ {
        day:  1,
        activities: [
          {
            AccountName: 'Itexico',
            ActivityDate: '2022-05-06T09:35:04',
            ActivityID: 0,
            CategoryName: 'Available',
            Comments: 'string',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'esto es un ticket',
            TypeID: 0,
            value: 5,
            activeInProject: false,
          }
        ],
        date: new Date(2022,1,1)
      },
      {
        day:  2,
        activities: [
          {
            AccountName: 'Itexico',
            ActivityDate: '2022-05-06T09:35:04',
            ActivityID: 0,
            CategoryName: 'Available',
            Comments: 'string',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'esto es un ticket',
            TypeID: 0,
            value: 5,
            activeInProject: false,
          }
        ],
        date: new Date(2022,1,2)
      },
      {
        day: 3,
        activities: [
          {
            AccountName: 'Itexico',
            ActivityDate: '2022-05-06T09:35:04',
            ActivityID: 0,
            CategoryName: 'Available',
            Comments: 'string',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'esto es un ticket',
            TypeID: 0,
            value: 5,
            activeInProject: false,
          }
        ],
        date: new Date(2022,1,3)
      }, {
        day: 4,
        activities: [
          {
            AccountName: 'Itexico',
            ActivityDate: '2022-05-06T09:35:04',
            ActivityID: 0,
            CategoryName: 'Available',
            Comments: 'string',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'esto es un ticket',
            TypeID: 0,
            value: 5,
            activeInProject: false,
          },
          {
            AccountName: 'Itexico',
            ActivityDate: '2022-05-06T09:35:04',
            ActivityID: 0,
            CategoryName: 'Available',
            Comments: 'string',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'esto es un ticket',
            TypeID: 0,
            value: 5,
            activeInProject: false,
          },
          {
            AccountName: 'Itexico',
            ActivityDate: '2022-05-06T09:35:04',
            ActivityID: 0,
            CategoryName: 'Available',
            Comments: 'string',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'esto es un ticket',
            TypeID: 0,
            value: 5,
            activeInProject: false,
          },
          {
            AccountName: 'Itexico',
            ActivityDate: '2022-05-06T09:35:04',
            ActivityID: 0,
            CategoryName: 'Available',
            Comments: 'string',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'esto es un ticket',
            TypeID: 0,
            value: 5,
            activeInProject: false,
          }
        ],
        date: new Date(2022,1,4)
      }, {
        day:  5,
        activities: [
          {
            AccountName: 'Itexico',
            ActivityDate: '2022-05-06T09:35:04',
            ActivityID: 0,
            CategoryName: 'Available',
            Comments: 'string',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'esto es un ticket',
            TypeID: 0,
            value: 5,
            activeInProject: false,
          }
        ],
        date: new Date(2022,1,5)
      }, {
        day: 6,
        activities: [
          {
            AccountName: 'Itexico',
            ActivityDate: '2022-05-06T09:35:04',
            ActivityID: 0,
            CategoryName: 'Available',
            Comments: 'string',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'esto es un ticket',
            TypeID: 0,
            value: 5,
            activeInProject: false,
          }
        ],
        date: new Date(2022,1,6)
      }, {
        day:  7,
        activities: [
          {
            AccountName: 'Itexico',
            ActivityDate: '2022-05-06T09:35:04',
            ActivityID: 0,
            CategoryName: 'Available',
            Comments: 'string',
            EmployeeID: 0,
            ProjectColor: 'blue',
            ProjectID: 0,
            ProjectName: 'Delivery',
            StepID: 0,
            Task: 'esto es un ticket',
            TypeID: 0,
            value: 5,
            activeInProject: false,
          }
        ],
        date: new Date(2022,1,7)
      }
    ],
};