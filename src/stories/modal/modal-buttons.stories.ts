import { Meta, Story } from '@storybook/angular';
import { ModalButtonsComponent } from 'src/app/components/modal-buttons/modal-buttons.component';
import { screen, userEvent } from '@storybook/testing-library';

export default {
    title: 'Modal Delete/Modal Buttons',
    component: ModalButtonsComponent,
} as Meta;

const Template: Story<ModalButtonsComponent> = (args: ModalButtonsComponent) => ({
    props: args,
});

export const Modal_Buttons = Template.bind({});
Modal_Buttons.play =async () => {
    const button = screen.getByRole('button')
    await userEvent.click(button)
}
Modal_Buttons.args = {

    type: 'confirm',
};

