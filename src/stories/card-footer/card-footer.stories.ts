import { Meta, moduleMetadata, Story } from '@storybook/angular/';

import { CardFooterComponent } from '../../app/components/card-footer/card-footer.component';
import { CardFooterHiddenItemsComponent } from '../../app/components/card-footer-hidden-items/card-footer-hidden-items.component';
import { CardFooterHoursComponent } from '../../app/components/card-footer-hours/card-footer-hours.component';

import { CommonModule } from '@angular/common';

export default {
  title: 'Card Footer',
  component: CardFooterComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardFooterHoursComponent, CardFooterHiddenItemsComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Card_Footer = Template.bind({});
Card_Footer.args = {
  totalHours: 8,
  hiddenItems: 3,
};
