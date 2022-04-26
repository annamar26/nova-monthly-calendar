import { Meta, moduleMetadata, Story } from '@storybook/angular/';

import { PopoverListFooterComponent } from '../app/components/popover-list-footer/popover-list-footer.component';
import { PopoverButtonComponent } from '../app/components/popover-button/popover-button.component';

import { CommonModule } from '@angular/common';

export default {
  title: 'Popover List Footer',
  component: PopoverListFooterComponent,

  decorators: [
    moduleMetadata({
      declarations: [PopoverButtonComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Popover_List_Footer = Template.bind({});
Popover_List_Footer.args = {
  update: 'update',
  clone: 'clone',
  delete: 'delete',
};
