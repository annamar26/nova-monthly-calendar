import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular/';
import { PopoverButtonComponent } from 'src/app/components/popover-button/popover-button.component';
import { PopoverListFooterComponent } from 'src/app/components/popover-list-footer/popover-list-footer.component';

export default {
  title: 'Popover/Popover Footer/Popover List Footer',
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
  buttons: ['update', 'clone', 'delete']
};
