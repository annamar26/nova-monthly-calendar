import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFooterHoursComponent } from './card-footer-hours.component';

describe('CardFooterHoursComponent', () => {
  let component: CardFooterHoursComponent;
  let fixture: ComponentFixture<CardFooterHoursComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFooterHoursComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFooterHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(' card footer total hours component should been created', () => {
    expect(component).toBeTruthy();
  });

  it('should display how many hours have been saved if there are some', () => {
    component.totalHours = 8;
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('div').textContent).toContain(
      `${component.totalHours} hrs`
    );
  });

  it('should have a class when component is created', () => {
    component.totalHours = 6;
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('div')).toHaveClass('total-hours');
  });

  it('should not display nothing if there are not hours registered', () => {
    component.totalHours = 0;
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('div')).toBeNull();
  });
});
