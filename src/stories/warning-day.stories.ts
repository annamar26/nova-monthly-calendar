import { Meta, Story } from '@storybook/angular';
import { WarningDayComponent } from '../app/components/warning-day/warning-day.component';

export default {
    title: 'Warning Day',
    component: WarningDayComponent,
} as Meta;

const Template: Story<WarningDayComponent> = (args: WarningDayComponent) => ({
    props: args,
});

export const HoursDay = Template.bind({});
HoursDay.args = {
    hoursDay: 6,
};