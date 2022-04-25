import { Meta, Story } from '@storybook/angular';
import { TooltipCalendarComponent } from '../app/components/tooltip-calendar/tooltip-calendar.component';

export default {
    title: 'Calendar Tooltip',
    component: TooltipCalendarComponent,
} as Meta;

const Template: Story<TooltipCalendarComponent> = (args: TooltipCalendarComponent) => ({
    props: args,
});

export const TooltipCalendarHours = Template.bind({});
TooltipCalendarHours.args = {
    tooltipText: 'You have 2 missing hours',
};

export const TooltipCalendarActivity = Template.bind({});
TooltipCalendarActivity.args = {
    tooltipText: 'Add one activity for one or more days',
};