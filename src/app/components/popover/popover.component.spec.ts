import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OnMouseOverItemService, Position } from 'src/app/services/item-popover/on-mouse-over-item.service';
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
		const element = fixture.nativeElement.querySelector('.colorFlag');
		const styles = window.getComputedStyle(element);

		expect(styles.backgroundColor).toBe('rgb(38, 68, 220)');
	});

	it('should change is visible when the observable changes', () => {
		const service: OnMouseOverItemService = new OnMouseOverItemService();
		const myComponent: PopoverComponent = new PopoverComponent(service);
		myComponent.isVisible = true;
		myComponent.ngOnInit();
		service.showPopover(myComponent.data);
		fixture.detectChanges();

		expect(myComponent.isVisible).toBeTrue();
	});

	it('should change data when the observable changes', () => {
		const service: OnMouseOverItemService = new OnMouseOverItemService();
		const myComponent: PopoverComponent = new PopoverComponent(service);
		const data = {
			AccountName: '',
			ActivityDate: '',
			ActivityID: 0,
			CategoryName: '',
			Comments: '',
			EmployeeID: 0,
			ProjectColor: 'red',
			ProjectID: 0,
			ProjectName: '',
			StepID: 0,
			TypeID: 0,
			value: 0,
			activeInProject: false
		};
		myComponent.ngOnInit();
		service.showPopover(data);
		fixture.detectChanges();

		expect(myComponent.data.ProjectColor).toBe('red');
	});

	it('should change position when the observable changes', () => {
		const service: OnMouseOverItemService = new OnMouseOverItemService();
		const myComponent: PopoverComponent = new PopoverComponent(service);
		myComponent.ngOnInit();
		service.showPopover(component.data);
		fixture.detectChanges();

		expect(myComponent.position).toBeDefined();
	});

	it('should trigger handleMouseout on mouseout', () => {
		const service: OnMouseOverItemService = new OnMouseOverItemService();
		const myComponent: PopoverComponent = new PopoverComponent(service);
		spyOn(myComponent, 'handleMouseout');

		let element = fixture.debugElement.query(By.css('.main-container'));

		element.triggerEventHandler('mouseout', component);
		fixture.detectChanges();

		expect(component.isVisible).toBeFalse();
	});
	
	it('should trigger handleMouseout on mouseout', () => {
		const service: OnMouseOverItemService = new OnMouseOverItemService();
		const myComponent: PopoverComponent = new PopoverComponent(service);
		spyOn(myComponent, 'handleMousemove');

		let element = fixture.debugElement.query(By.css('.main-container'));

		element.triggerEventHandler('mousemove', component);
		fixture.detectChanges();

		expect(component.isVisible).toBeTrue();
	});
});
