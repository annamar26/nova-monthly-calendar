import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CardFooterHoursComponent } from 'src/app/components/card-footer-hours/card-footer-hours.component';
import { HeaderPopoverComponent } from 'src/app/components/header-popover/header-popover.component';
import { ModalButtonsComponent } from 'src/app/components/modal-buttons/modal-buttons.component';
import { ModalDeleteComponent } from 'src/app/components/modal-delete/modal-delete.component';
import { PopoverBodyTextComponent } from 'src/app/components/popover-body-text/popover-body-text.component';
import { PopoverBodyComponent } from 'src/app/components/popover-body/popover-body.component';
import { PopoverButtonComponent } from 'src/app/components/popover-button/popover-button.component';
import { PopoverListFooterComponent } from 'src/app/components/popover-list-footer/popover-list-footer.component';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

export default {
  title: 'Popover/Popover',
  component: PopoverComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        PopoverComponent,
        HeaderPopoverComponent,
        PopoverBodyComponent,
        PopoverBodyTextComponent,
        CardFooterHoursComponent,
        PopoverButtonComponent,
        PopoverListFooterComponent,
        ModalButtonsComponent,
        ModalDeleteComponent,
      ],

      imports: [CommonModule],
    }),
  ],
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<PopoverComponent> = (args: PopoverComponent) => ({
  props: args,
});

export const Popover = Template.bind({});

Popover.args = {
  data: {
    AccountName: 'Itexico ',
    ActivityDate: '2011-12-19T15:28:46.493Z',
    ActivityID: 0,
    CategoryName: 'Avalaible',
    Comments: 'Comentario de las actividades realizadas',
    EmployeeID: 0,
    ProjectColor: 'blue',
    ProjectID: 0,
    ProjectName: 'Delivery',
    StepID: 0,
    Task: 'Este es un ticket',
    TypeID: 0,
    value: 8,
    activeInProject: false,
  },
};
