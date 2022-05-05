import { Meta, Story } from '@storybook/angular';
import { PItemDiaComponent } from 'src/app/components/p-item-dia/p-item-dia.component';

export default {
    title: 'Day Card/Day List/P Item Day',
    component: PItemDiaComponent,
} as Meta;

const Template: Story<PItemDiaComponent> = (args: PItemDiaComponent) => ({
    props: args,
});

export const P_Item_Day = Template.bind({});
P_Item_Day.args = {
    data: {
        AccountName: "iTexico",
        ProjectName: "Project",
        CategoryName: "Category",
        ProjectColor: "green",
        ActivityDate: "2022-05-02T15:28:46.493Z",
        ActivityID: 0,
        Comments: 'Este es un comentario',
        EmployeeID: 0,
        ProjectID: 0,
        StepID: 0,
        TypeID: 0,
        value: 8,
        activeInProject: false
    },
};