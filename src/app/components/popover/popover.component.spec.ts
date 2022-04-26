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
		expect(fixture.nativeElement.querySelector('app-popover-body')).toBeTruthy();
	});
	it('"flagColorElement" prop should be undefined before view init ', () => {
		component!.flagColorElement = undefined;
		expect(component.flagColorElement).toBeUndefined();
	});
	it('"flagColorElement" prop should be define after view init ', () => {
		const flag = component!.flagColorElement;
		fixture.componentInstance.ngAfterViewInit();
		fixture.detectChanges();

		expect(flag).toBeTruthy();
	});
  it('should change the color to the rgb color if the property exist in the input', () => {
		component!.data.ProjectColor = 'rgb(38, 68, 220)';
		fixture.detectChanges();
		const flag = component!.flagColorElement;
		fixture.componentInstance.ngAfterViewInit();
		const styles = window.getComputedStyle(flag!);

		expect(styles.backgroundColor).toBe('rgb(38, 68, 220)');
	});
});
