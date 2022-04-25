import { Meta, Story } from '@storybook/angular';

import { CardFooterHoursComponent } from '../../app/components/card-footer-hours/card-footer-hours.component';

export default {
  title: 'Card Footer Hours',
  component: CardFooterHoursComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Card_Footer_Hours = Template.bind({});
Card_Footer_Hours.args = {
  totalHours: 8,
};
