import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TooltipCalendarComponent } from 'src/app/components/tooltip-calendar/tooltip-calendar.component';
import { WarningDayComponent } from '../app/components/warning-day/warning-day.component';

export default {
    title: 'Warning Day',
    component: WarningDayComponent,
    decorators: [
        moduleMetadata({
            declarations: [TooltipCalendarComponent],
            imports: [CommonModule]
        })
    ]
} as Meta;

const Template: Story<WarningDayComponent> = (args: WarningDayComponent) => ({
    props: args,
});

export const Warning_Day = Template.bind({});
Warning_Day.args = {
    hoursDay: 6,
};