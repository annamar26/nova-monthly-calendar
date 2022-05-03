import { Story, Meta } from '@storybook/angular/types-6-0';
import { PopoverBodyTextComponent } from 'src/app/components/popover-body-text/popover-body-text.component';

export default {
  title: 'Popover/Popover Body/Popover body text',
  component: PopoverBodyTextComponent,
} as Meta;

const Template: Story = (args) => ({props:args});

export const Comment = Template.bind({});
Comment.args = { type: 'comment', content: 'This is a comment' }

export const Task = Template.bind({});
Task.args = { type: 'task', content: 'This is a task (ticket)' }
