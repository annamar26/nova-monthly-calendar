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
      "AccountName": 'Itexico ',
      "ActivityDate": '2011-12-19T15:28:46.493Z',
      "ActivityID": 0,
      "CategoryName": 'Avalaible',
      "Comments": 'Comentario de las actividades realizadas',
      "EmployeeID": 0,
      "ProjectColor": 'blue',
      "ProjectID": 0,
      "ProjectName": 'Delivery',
      "StepID": 0,
      "Task": 'Este es un ticket',
      "TypeID": 0,
      "value": 8,
      "activeInProject": false
      }
    
    
  
    
   
 
};