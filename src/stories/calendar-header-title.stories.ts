import { Meta, Story } from '@storybook/angular';
import { CalendarHeaderTitleComponent } from '../app/components/calendar-header-title/calendar-header-title.component';

export default {
  title: 'Header Title',
  component: CalendarHeaderTitleComponent,
  argTypes: {
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Header_Title = Template.bind({});
Header_Title.args = {
  headerTitle: 'Monday',
  textWidth: 'bold',
};
