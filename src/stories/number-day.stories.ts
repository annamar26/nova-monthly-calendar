import { Meta, Story } from '@storybook/angular';
import { NumberDayComponent } from '../app/components/number-day/number-day.component';

export default {
    title: 'Number Day',
    component: NumberDayComponent,
} as Meta;

const Template: Story<NumberDayComponent> = (args: NumberDayComponent) => ({
    props: args,
});

export const DayNumber = Template.bind({});
DayNumber.args = {
    dayNumber: 8,
};