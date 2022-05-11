import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { ModalButtonsComponent } from './../app/components/modal-buttons/modal-buttons.component';
import { ModalDeleteComponent } from './../app/components/modal-delete/modal-delete.component';
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
import { AppComponent } from 'src/app/app.component';
import { HeaderPopoverComponent } from 'src/app/components/header-popover/header-popover.component';

export default {
  title: 'Calendar/App',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        WeekRowComponent,
        CalendarComponent,
        DayCardComponent,
        ModalDeleteComponent,
        ModalButtonsComponent,
        SnackbarComponent,
        CalendarHeaderComponent,
        CalendarHeaderTitleComponent,
        ListaDiaComponent,
        PItemDiaComponent,
        AddActivityButtonComponent,
        DayHeaderComponent,
        CardFooterComponent,
        CardFooterHoursComponent,
        CardFooterHiddenItemsComponent,
        WarningDayComponent,
        NumberDayComponent,
        TooltipCalendarComponent,
        ListaDiaComponent,
        ItemDiaComponent,
        PopoverBodyComponent,
        PopoverBodyTextComponent,
        PopoverButtonComponent,
        PopoverListFooterComponent,
        PopoverComponent,
        PopoverBodyComponent,
        PopoverBodyTextComponent,
        CardFooterHoursComponent,
        PopoverButtonComponent,
        HeaderPopoverComponent,
      ],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});

export const App = Template.bind({});
App.args = {
    currentDate: new Date(),
    srcData: [
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
    ]
};
