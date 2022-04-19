import { Meta, Story } from '@storybook/angular/';

import { CardFooterHiddenItemsComponent } from '../../app/components/card-footer-hidden-items/card-footer-hidden-items.component';

export default {
  title: 'card footer hidden items',
  component: CardFooterHiddenItemsComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const HiddenItems = Template.bind({});
HiddenItems.args = {
  hiddenItems: 3,
};
