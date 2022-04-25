import { Story, Meta } from '@storybook/angular/types-6-0';
import { ItemDiaComponent } from 'src/app/components/item-dia/item-dia.component';

export default {
  title: 'Card Day Item',
  component: ItemDiaComponent,
 
} as Meta;


const Template: Story<ItemDiaComponent> = (args :ItemDiaComponent) => ({
  props: args,
});

export const Card_Day_Item = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Card_Day_Item.args = {
    data: {
          "project": "iTexico - Talent Management",
          "category": "category",
          "color":"blue"
      }
    
    
  
    
   
 
};