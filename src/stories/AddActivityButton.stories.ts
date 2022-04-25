import { Story, Meta } from '@storybook/angular/types-6-0';
import { AddActivityButtonComponent } from '../app/components/add-activity-button/add-activity-button.component';

export default {
  title: 'Calendar Add activity buttton',
  component: AddActivityButtonComponent,
} as Meta;

const Template: Story = (args) => ({props:args});

export const DayButton = Template.bind({});
DayButton.args = { type: 'day' }

export const GeneralButton = Template.bind({});
GeneralButton.args = { type: 'general' }
