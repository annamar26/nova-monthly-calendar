import { Meta, Story } from '@storybook/angular';
import { PopoverButtonComponent } from 'src/app/components/popover-button/popover-button.component';

export default {
    title: 'Popover Button',
    component: PopoverButtonComponent,
} as Meta;

const Template: Story<PopoverButtonComponent> = (args: PopoverButtonComponent) => ({
    props: args,
});

export const PopoverUpdateButton = Template.bind({});
PopoverUpdateButton.args = {
    buttonText: 'update',
};

export const PopoverCloneButton = Template.bind({});
PopoverCloneButton.args = {
    buttonText: 'clone',
};

export const PopoverDeleteButton = Template.bind({});
PopoverDeleteButton.args = {
    buttonText: 'delete',
};