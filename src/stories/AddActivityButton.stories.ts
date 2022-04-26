import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AddActivityButtonComponent } from 'src/app/components/add-activity-button/add-activity-button.component';
import { TooltipCalendarComponent } from 'src/app/components/tooltip-calendar/tooltip-calendar.component';

export default {
  title: 'Calendar Add activity buttton',
  component: AddActivityButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [TooltipCalendarComponent],
      imports: [CommonModule]
    })
  ]
} as Meta;

const Template: Story = (args) => ({props:args});

export const DayButton = Template.bind({});
DayButton.args = { type: 'day' }

export const GeneralButton = Template.bind({});
GeneralButton.args = { type: 'general' }