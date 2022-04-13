import { Story, Meta } from '@storybook/angular/types-6-0';
import { ListaDiaComponent } from 'src/app/components/lista-dia/lista-dia.component';


export default {
  title: 'Lista día component',
  component: ListaDiaComponent,

} as Meta;


const Template: Story<ListaDiaComponent> = (args: ListaDiaComponent) => ({
  props: args,
});

export const data = Template.bind({});

data.args = {
 arrayDia: [	{
    "project": 'Project1',
    "category": 'categorya',
    "color": ''
},
{
    "project": 'Project2',
    "category": 'categoryb',
    "color": ''
},
{
    "project": 'Project3',
    "category": 'categoryc',
    "color": ''
}]
};

