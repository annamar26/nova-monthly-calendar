import { CommonModule } from '@angular/common';
import { componentWrapperDecorator, Meta, moduleMetadata, Story } from '@storybook/angular';
import { HeaderPopoverComponent } from 'src/app/components/header-popover/header-popover.component';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import * as HeaderStory from './header-popover.stories'


export default {
    title: 'Popover',
    component: PopoverComponent, 
    decorators:[
        moduleMetadata({
            declarations:[PopoverComponent, HeaderPopoverComponent],
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
    "ProjectColor": "red"

}
};
