import { Meta, Story } from '@storybook/angular/';

import { CardFooterHiddenItemsComponent } from '../../app/components/card-footer-hidden-items/card-footer-hidden-items.component';

export default {
  title: 'Card Footer Hidden Items',
  component: CardFooterHiddenItemsComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Card_Footer_Hidden_Items = Template.bind({});
Card_Footer_Hidden_Items.args = {
  hiddenItems: 3,
};
