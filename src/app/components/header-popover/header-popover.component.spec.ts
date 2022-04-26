import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderPopoverComponent } from './header-popover.component';

describe('HeaderPopoverComponent', () => {
	let component: HeaderPopoverComponent;
	let fixture: ComponentFixture<HeaderPopoverComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ HeaderPopoverComponent ]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderPopoverComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('should render the AcountName', () => {
		component!.data.AccountName = 'Test AccountName';

		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('p').innerText).toContain(`Test AccountName`);
	});
	it('should render the ProjectName', () => {
		component!.data.ProjectName = 'Test ProjectName';
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('p').innerText).toContain(`Test ProjectName`);
	});
	it('should render the CategoryName', () => {
		component!.data.ProjectName = 'Test CategoryName';
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('p').innerText).toContain(`Test CategoryName`);
	});
	it('should have the correct styles', () => {
		const styles = window.getComputedStyle(fixture.nativeElement.querySelector('p'));
		expect(styles.height).toBe('34px');
	});
});
