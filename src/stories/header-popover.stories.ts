import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderPopoverComponent } from 'src/app/components/header-popover/header-popover.component';


export default {
  title: 'Popover Header ',
  component: HeaderPopoverComponent,
 
} as Meta;


const Template: Story<HeaderPopoverComponent> = (args :HeaderPopoverComponent) => ({
  props: args,
});

export const Popover_Header= Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Popover_Header.args = {
    data: {
          "AccountName": "iTexico",
          "ProjectName": "Delivery",
          "CategoryName": "category",
          
      }
    
    
  
    
   
 
};