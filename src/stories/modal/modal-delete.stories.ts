import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HeaderPopoverComponent } from 'src/app/components/header-popover/header-popover.component';
import { ModalButtonsComponent } from 'src/app/components/modal-buttons/modal-buttons.component';
import { ModalDeleteComponent } from 'src/app/components/modal-delete/modal-delete.component';
import { PopoverBodyTextComponent } from 'src/app/components/popover-body-text/popover-body-text.component';
import { PopoverBodyComponent } from 'src/app/components/popover-body/popover-body.component';
import { PopoverButtonComponent } from 'src/app/components/popover-button/popover-button.component';
import { PopoverListFooterComponent } from 'src/app/components/popover-list-footer/popover-list-footer.component';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

export default {
    title: 'Modal Delete/Modal',
    component: ModalDeleteComponent,
    decorators: [
        moduleMetadata({
            declarations: [ModalButtonsComponent, PopoverComponent, HeaderPopoverComponent, PopoverBodyComponent, PopoverBodyTextComponent, PopoverListFooterComponent, PopoverButtonComponent],
            imports: [CommonModule]
        })
    ],
    argTypes: { onClick: { action: 'clicked' } }
} as Meta;

const Template: Story<ModalDeleteComponent> = (args: ModalDeleteComponent) => ({
    props: args,

});

export const Modal = Template.bind({});
Modal.args = {
    isVisible: true,
};