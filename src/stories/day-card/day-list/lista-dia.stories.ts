import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ItemDiaComponent } from 'src/app/components/item-dia/item-dia.component';
import { ListaDiaComponent } from 'src/app/components/lista-dia/lista-dia.component';
import { PItemDiaComponent } from 'src/app/components/p-item-dia/p-item-dia.component';


export default {
  title: 'Day Card/Day List/Card Day List',
  component: ListaDiaComponent,
  decorators: [
    moduleMetadata({
      declarations: [ListaDiaComponent, ItemDiaComponent, PItemDiaComponent],
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
  "activeInProject": false},
{
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
},
{
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
}]
};

