import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverComponent } from './popover.component';

describe('PopoverComponent', () => {
	let component: PopoverComponent;
	let fixture: ComponentFixture<PopoverComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ PopoverComponent ]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PopoverComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('should render the header', () => {
		expect(fixture.nativeElement.querySelector('app-header-popover')).toBeTruthy();
	});
	it('should render the body', () => {
		expect(fixture.nativeElement.querySelector('app-popover-body-text')).toBeTruthy();
		expect(fixture.nativeElement.querySelector('.popover-ticket-hours')).toBeTruthy();
	});
	
	  it('should change the color to the rgb color if the property exist in the input', () => {
		component!.data.ProjectColor = 'rgb(38, 68, 220)';
		fixture.detectChanges();
		const element = fixture.nativeElement.querySelector(".colorFlag")
		const styles = window.getComputedStyle(element);

		expect(styles.backgroundColor).toBe('rgb(38, 68, 220)');
	});
});
