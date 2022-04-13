import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDiaComponent } from './lista-dia.component';

describe('ListaDiaComponent', () => {
	let component: ListaDiaComponent;
	let fixture: ComponentFixture<ListaDiaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ListaDiaComponent ]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ListaDiaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
  it('should do not create li element if the input is empty', () => {
		component.arrayDia = [];
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelectorAll('li').length).toBeFalsy()
	});
	it('should create 1 li element with 1 element in the Input', () => {
		component.arrayDia = [
			{
				project: 'Project1',
				category: 'category',
				color: ''
			}
		];
		fixture.detectChanges();
		const numberfElements = component.arrayDia.length;
		console.log(fixture.nativeElement.querySelectorAll('li'));
		expect(fixture.nativeElement.querySelectorAll('li').length).toBe(1);
	});
	it('should create 3 li element with 3 element in the Input', () => {
		component.arrayDia = [
			{
				project: 'Project1',
				category: 'category',
				color: ''
			},
			{
				project: 'Project1',
				category: 'category',
				color: ''
			},
			{
				project: 'Project1',
				category: 'category',
				color: ''
			}
		];
		fixture.detectChanges();
		const numberfElements = component.arrayDia.length;
		console.log(fixture.nativeElement.querySelectorAll('li'));
		expect(fixture.nativeElement.querySelectorAll('li').length).toBe(3);
	});
});
