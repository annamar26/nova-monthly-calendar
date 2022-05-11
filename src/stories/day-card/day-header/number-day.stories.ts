import { Meta, Story } from '@storybook/angular';
import { NumberDayComponent } from 'src/app/components/number-day/number-day.component';

export default {
    title: 'Day Card/Card Header/Card Number Day',
    component: NumberDayComponent,
} as Meta;

const Template: Story<NumberDayComponent> = (args: NumberDayComponent) => ({
    props: args,
});

export const Card_Number_Day = Template.bind({});
Card_Number_Day.args = {
    dayNumber: 8,
};