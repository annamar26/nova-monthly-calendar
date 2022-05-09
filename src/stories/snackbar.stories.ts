import { Story, Meta } from '@storybook/angular/types-6-0';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';

export default {
	title: 'Extra components/Calendar snackbar',
	component: SnackbarComponent
} as Meta;

const Template: Story<SnackbarComponent> = (args: SnackbarComponent) => ({
	props: args
});

export const Success_snackbar = Template.bind({});
Success_snackbar.args = {
	message: 'Este es un mensaje de prueba',
	type: 'default',
	success: true,
	isVisible: true,
};
export const error = Template.bind({});
error.args = {
	message: 'Este es un mensaje de prueba',
	type: 'default',
	success: false,
	isVisible: true,
};
export const Custom_snackbar = Template.bind({});
Custom_snackbar.args = {
	message: 'Este es un mensaje de prueba',
	type: 'custom',
    backgroundColor: 'purple',
	isVisible: true,
};
