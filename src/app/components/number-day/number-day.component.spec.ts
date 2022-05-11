import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberDayComponent } from './number-day.component';

describe('NumberDayComponent', () => {
  let component: NumberDayComponent;
  let fixture: ComponentFixture<NumberDayComponent>;
  let p: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberDayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberDayComponent);
    component = fixture.componentInstance;
    p = fixture.nativeElement.querySelector('p');
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display 1 if the number hasnt been assigned', () => {
    fixture.detectChanges();
    expect(p.textContent).toContain(1);
  });

  it('should display the number assigned', () => {
    component.dayNumber = 5;
    fixture.detectChanges();
    expect(p.textContent).toContain(component.dayNumber);
  });
});
