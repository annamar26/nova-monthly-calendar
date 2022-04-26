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
		component!.data.AccountName = 'Test AccountName';
		component!.data.ProjectName = 'Test project';
		component!.data.CategoryName = 'Test category';
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('p').innerText).toEqual('Test AccountName Test project - Test category');
	});
	it('should change the color to the color name if the property exist in the input', () => {
		component!.data.ProjectColor = 'pink';
		fixture.detectChanges();
		const flag = component!.flagColorElement;
		fixture.componentInstance.ngAfterViewInit();
		const styles = window.getComputedStyle(flag!);

		expect(styles.backgroundColor).toBe('rgb(255, 192, 203)');
	});
	it('should change the color to the rgb color if the property exist in the input', () => {
		component!.data.ProjectColor = 'rgb(38, 68, 220)';
		fixture.detectChanges();
		const flag = component!.flagColorElement;
		fixture.componentInstance.ngAfterViewInit();
		const styles = window.getComputedStyle(flag!);

		expect(styles.backgroundColor).toBe('rgb(38, 68, 220)');
	});
  it('should change the color to the hex color if the property exist in the input', () => {
		component!.data.ProjectColor = '#f7e348';
		fixture.detectChanges();
		const flag = component!.flagColorElement;
		fixture.componentInstance.ngAfterViewInit();
		const styles = window.getComputedStyle(flag!);

		expect(styles.backgroundColor).toBe('rgb(247, 227, 72)');
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



