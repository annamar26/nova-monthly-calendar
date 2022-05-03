import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CalendarHeaderTitleComponent } from 'src/app/components/calendar-header-title/calendar-header-title.component';
import { CalendarHeaderComponent } from 'src/app/components/calendar-header/calendar-header.component';

export default {
    title: 'Calendar/Calendar Header/Calendar Header',
    component: CalendarHeaderComponent,
    decorators: [
        moduleMetadata({
            declarations: [CalendarHeaderTitleComponent],
            imports: [CommonModule]
        })
    ]
} as Meta;

const Template: Story<CalendarHeaderComponent> = (args: CalendarHeaderComponent) => ({
    props: args,
});

export const Calendar_Header = Template.bind({});
Calendar_Header.args = {
    dayNames:['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};