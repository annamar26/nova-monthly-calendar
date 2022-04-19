import { Meta, Story } from '@storybook/angular';

import { CardFooterHoursComponent } from '../../app/components/card-footer-hours/card-footer-hours.component';

export default {
  title: 'card footer hours',
  component: CardFooterHoursComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const TotalHours = Template.bind({});
TotalHours.args = {
  totalHours: 8,
};
