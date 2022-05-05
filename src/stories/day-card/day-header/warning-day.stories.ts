import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TooltipCalendarComponent } from 'src/app/components/tooltip-calendar/tooltip-calendar.component';
import { WarningDayComponent } from 'src/app/components/warning-day/warning-day.component';

export default {
    title: 'Day Card/Card Header/Card Warning Day',
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

export const Card_Warning_Day = Template.bind({});
Card_Warning_Day.args = {
    hoursDay: 6,
};