import { PopoverBodyComponent } from './../app/components/popover-body/popover-body.component';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CardFooterHoursComponent } from 'src/app/components/card-footer-hours/card-footer-hours.component';
import { PopoverBodyTextComponent } from 'src/app/components/popover-body-text/popover-body-text.component';

export default {
  title: 'Popover Body',
  component: PopoverBodyComponent,
  decorators: [
    moduleMetadata({
      declarations: [PopoverBodyTextComponent, CardFooterHoursComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({ props: args });

export const Popover_Body = Template.bind({});
Popover_Body.args = { comment: 'This is a comment', task:'This is a ticket', hours: 3 };
