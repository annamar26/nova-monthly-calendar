import { not } from '@angular/compiler/src/output/output_ast';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing'
import { ItemDiaComponent } from './item-dia.component';

describe('ItemDiaComponent', () => {
	let component: ItemDiaComponent;
	let fixture: ComponentFixture<ItemDiaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ItemDiaComponent ]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ItemDiaComponent);
		component = fixture.componentInstance;
   
	});


	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('should show TEST INPUT', () => {
		component!.data.project = 'Test project';
		component!.data.category = 'Test category';
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('p').innerText).toEqual('Test project - Test category');
	});
	it('should change the color to the color name if the property exist in the input', () => {
		component!.data.color = 'pink';
		fixture.detectChanges();
		const flag = component!.flagColorElement;
		fixture.componentInstance.ngAfterViewInit();
		const styles = window.getComputedStyle(flag!);

		expect(styles.backgroundColor).toBe('rgb(255, 192, 203)');
	});
	it('should change the color to the rgb color if the property exist in the input', () => {
		component!.data.color = 'rgb(38, 68, 220)';
		fixture.detectChanges();
		const flag = component!.flagColorElement;
		fixture.componentInstance.ngAfterViewInit();
		const styles = window.getComputedStyle(flag!);

		expect(styles.backgroundColor).toBe('rgb(38, 68, 220)');
	});
  it('should change the color to the hex color if the property exist in the input', () => {
		component!.data.color = '#f7e348';
		fixture.detectChanges();
		const flag = component!.flagColorElement;
		fixture.componentInstance.ngAfterViewInit();
		const styles = window.getComputedStyle(flag!);

		expect(styles.backgroundColor).toBe('rgb(247, 227, 72)');
	});
  it('should change the color to red if the color property does not exist in the input & the project is "iTexico - Delivery"', () => {
		component!.data.color = '';
    component!.data.project = "iTexico - Delivery"
		fixture.detectChanges();
		const flag = component!.flagColorElement;
		fixture.componentInstance.ngAfterViewInit();
		const styles = window.getComputedStyle(flag!);

		expect(styles.backgroundColor).toBe('rgb(209, 35, 10)');
	});
  it('should change the color to green if the color property does not exist in the input & the project is "iTexico - Talent Management"', () => {
		component!.data.color = '';
    component!.data.project = "iTexico - Talent Management"
		fixture.detectChanges();
		const flag = component!.flagColorElement;
		fixture.componentInstance.ngAfterViewInit();
		const styles = window.getComputedStyle(flag!);

		expect(styles.backgroundColor).toBe('rgb(76, 175, 80)');
	});
  it('should change the color to lightgreen if the color property does not exist in the input & the project does not exit neither', () => {
		component!.data.color = '';
    component!.data.project = ""
		fixture.detectChanges();
		const flag = component!.flagColorElement;
		fixture.componentInstance.ngAfterViewInit();
		const styles = window.getComputedStyle(flag!);

		expect(styles.backgroundColor).toBe('rgb(93, 220, 38)');
	});
	it('"flagColorElement" prop should be undefined before view init and defined after it', () => {
		
    component!.flagColorElement = undefined
	expect(component.flagColorElement).toBeUndefined()
		fixture.detectChanges();
		const flag = component!.flagColorElement;
		fixture.componentInstance.ngAfterViewInit();
		

		expect(flag).toBeTruthy()
	});
});



