import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderPopoverComponent } from 'src/app/components/header-popover/header-popover.component';


export default {
  title: 'Header Popover',
  component: HeaderPopoverComponent,
 
} as Meta;


const Template: Story<HeaderPopoverComponent> = (args :HeaderPopoverComponent) => ({
  props: args,
});

export const Header_Popover = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Header_Popover.args = {
    data: {
          "AccountName": "iTexico",
          "ProjectName": "Delivery",
          "CategoryName": "category",
          
      }
    
    
  
    
   
 
};