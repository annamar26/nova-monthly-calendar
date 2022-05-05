import { Meta, Story } from '@storybook/angular';
import { CalendarHeaderTitleComponent } from 'src/app/components/calendar-header-title/calendar-header-title.component';

export default {
  title: 'Calendar/Calendar Header/Calendar Header Title',
  component: CalendarHeaderTitleComponent,
  argTypes: {
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Calendar_Header_Title = Template.bind({});
Calendar_Header_Title.args = {
  headerTitle: 'Monday',
  textWidth: 'bold',
};
