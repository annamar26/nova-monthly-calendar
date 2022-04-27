import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CardFooterHoursComponent } from 'src/app/components/card-footer-hours/card-footer-hours.component';
import { HeaderPopoverComponent } from 'src/app/components/header-popover/header-popover.component';
import { PopoverBodyTextComponent } from 'src/app/components/popover-body-text/popover-body-text.component';
import { PopoverBodyComponent } from 'src/app/components/popover-body/popover-body.component';
import { PopoverButtonComponent } from 'src/app/components/popover-button/popover-button.component';
import { PopoverListFooterComponent } from 'src/app/components/popover-list-footer/popover-list-footer.component';
import { PopoverComponent } from 'src/app/components/popover/popover.component';



export default {
    title: 'Popover',
    component: PopoverComponent, 
    decorators:[
        moduleMetadata({
            declarations:[PopoverComponent, HeaderPopoverComponent, PopoverBodyComponent, PopoverBodyTextComponent, CardFooterHoursComponent, PopoverButtonComponent,
            PopoverListFooterComponent],
            imports: [CommonModule]
        
        }),
       
    ]
} as Meta;

const Template: Story<PopoverComponent> = (args: PopoverComponent) => ({
    props: args,
   
});

export const Popover = Template.bind({});

Popover.args = {
data:{
    "AccountName": "algo",
    "ProjectName": "algo",
    "CategoryName": "algo",
    "ProjectColor": "red",
    "comment": "comentarios",
    "task": "ticket",
    "hours": 2,

}
};
