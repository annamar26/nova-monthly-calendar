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

interface Data {
    projects:    Project[];
    totalHours:  number;
    hiddenItems: number;
    day:         number;
}

interface Project {
    AccountName:  string;
    ProjectName:  string;
    CategoryName: string;
    ProjectColor: string;
    Task:         string;
    Comment:      string;
    hours:        number;
}

const data: Data = {
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
  }

export default {
  title: 'Day Card',
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
      ],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({ props: args });

export const Day_Card = Template.bind({});
Day_Card.args = {
  data,
};

