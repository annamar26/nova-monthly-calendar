import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DayCardComponent } from 'src/app/components/day-card/day-card.component';
import { ItemDiaComponent } from 'src/app/components/item-dia/item-dia.component';
import { ListaDiaComponent } from 'src/app/components/lista-dia/lista-dia.component';
import { DayHeaderComponent } from 'src/app/components/day-header/day-header.component';
import { NumberDayComponent } from 'src/app/components/number-day/number-day.component';
import { WarningDayComponent } from 'src/app/components/warning-day/warning-day.component';
import { CardFooterComponent } from 'src/app/components/card-footer/card-footer.component';
import { TooltipCalendarComponent } from 'src/app/components/tooltip-calendar/tooltip-calendar.component';
import { CardFooterHoursComponent } from 'src/app/components/card-footer-hours/card-footer-hours.component';
import { AddActivityButtonComponent } from 'src/app/components/add-activity-button/add-activity-button.component';
import { CardFooterHiddenItemsComponent } from 'src/app/components/card-footer-hidden-items/card-footer-hidden-items.component';
import { PopoverBodyComponent } from 'src/app/components/popover-body/popover-body.component';
import { PopoverBodyTextComponent } from 'src/app/components/popover-body-text/popover-body-text.component';
import { PopoverButtonComponent } from 'src/app/components/popover-button/popover-button.component';
import { PopoverListFooterComponent } from 'src/app/components/popover-list-footer/popover-list-footer.component';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { PItemDiaComponent } from 'src/app/components/p-item-dia/p-item-dia.component';


export default {
  title: 'Day Card/Day Card',
  component: DayCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        ListaDiaComponent,
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
        PItemDiaComponent
      ],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({ props: args });

export const Day_Card = Template.bind({});
Day_Card.args = {
  data: [	{
    "AccountName": 'Itexico ',
    "ActivityDate": '2011-12-19T15:28:46.493Z',
    "ActivityID": 0,
    "CategoryName": 'Avalaible',
    "Comments": 'Comentario de las actividades realizadas',
    "EmployeeID": 0,
    "ProjectColor": 'blue',
    "ProjectID": 0,
    "ProjectName": 'Delivery',
    "StepID": 0,
    "Task": 'Este es un ticket',
    "TypeID": 0,
    "value": 8,
    "activeInProject": false},
  {
    "AccountName": 'Itexico ',
    "ActivityDate": '2011-12-19T15:28:46.493Z',
    "ActivityID": 0,
    "CategoryName": 'Avalaible',
    "Comments": 'Comentario de las actividades realizadas',
    "EmployeeID": 0,
    "ProjectColor": 'blue',
    "ProjectID": 0,
    "ProjectName": 'Delivery',
    "StepID": 0,
    "Task": 'Este es un ticket',
    "TypeID": 0,
    "value": 8,
    "activeInProject": false
  },
  {
    "AccountName": 'Itexico ',
    "ActivityDate": '2011-12-19T15:28:46.493Z',
    "ActivityID": 0,
    "CategoryName": 'Avalaible',
    "Comments": 'Comentario de las actividades realizadas',
    "EmployeeID": 0,
    "ProjectColor": 'blue',
    "ProjectID": 0,
    "ProjectName": 'Delivery',
    "StepID": 0,
    "Task": 'Este es un ticket',
    "TypeID": 0,
    "value": 8,
    "activeInProject": false
  }],
  totalHours: 6,
    hiddenItems: 2,
    day: 26,
};

