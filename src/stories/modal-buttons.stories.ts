import { Meta, Story } from '@storybook/angular';
import { ModalButtonsComponent } from 'src/app/components/modal-buttons/modal-buttons.component';

export default {
    title: 'Modal Buttons',
    component: ModalButtonsComponent,
} as Meta;

const Template: Story<ModalButtonsComponent> = (args: ModalButtonsComponent) => ({
    props: args,
});

export const ModalConfirmButton = Template.bind({});
ModalConfirmButton.args = {
    type: 'confirm',
};

