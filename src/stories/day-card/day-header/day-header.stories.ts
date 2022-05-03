import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { WarningDayComponent } from 'src/app/components/warning-day/warning-day.component';
import { AddActivityButtonComponent } from 'src/app/components/add-activity-button/add-activity-button.component';
import { TooltipCalendarComponent } from 'src/app/components/tooltip-calendar/tooltip-calendar.component';
import { NumberDayComponent } from 'src/app/components/number-day/number-day.component';
import { DayHeaderComponent } from 'src/app/components/day-header/day-header.component';

export default {
  title: 'Day Card/Card Header/Calendar Day Header',
  component: DayHeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [WarningDayComponent, NumberDayComponent, TooltipCalendarComponent, AddActivityButtonComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({ props: args });

export const Calendar_Day_Header = Template.bind({});
Calendar_Day_Header.args = { day: 1, hours: 0 };
