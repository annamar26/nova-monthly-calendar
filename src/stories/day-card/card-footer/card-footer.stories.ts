import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular/';
import { CardFooterHiddenItemsComponent } from 'src/app/components/card-footer-hidden-items/card-footer-hidden-items.component';
import { CardFooterHoursComponent } from 'src/app/components/card-footer-hours/card-footer-hours.component';
import { CardFooterComponent } from 'src/app/components/card-footer/card-footer.component';

export default {
  title: 'Day Card/Card Footer/Card Footer',
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
