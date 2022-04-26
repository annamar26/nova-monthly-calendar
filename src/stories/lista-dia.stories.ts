import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ItemDiaComponent } from 'src/app/components/item-dia/item-dia.component';
import { ListaDiaComponent } from 'src/app/components/lista-dia/lista-dia.component';


export default {
  title: 'Card Day List',
  component: ListaDiaComponent,
  decorators: [
    moduleMetadata({
      declarations: [ListaDiaComponent, ItemDiaComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;


const Template: Story<ListaDiaComponent> = (args: ListaDiaComponent) => ({
  props: args,
});

export const Card_Day_List = Template.bind({});

Card_Day_List.args = {
 arrayDia: [	{
   "AccountName": "Itexico",
    "ProjectName": 'Project1',
    "CategoryName": 'categorya',
    "ProjectColor": 'blue'
},
{
  "AccountName": "Itexico",
  "ProjectName": 'Project2',
  "CategoryName": 'categorya',
  "ProjectColor": 'green'
},
{
  "AccountName": "Itexico",
  "ProjectName": 'Project3',
  "CategoryName": 'categorya',
  "ProjectColor": 'red'
}]
};

