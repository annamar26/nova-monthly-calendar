import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DayHeaderComponent } from './day-header.component';

describe('DayHeaderComponent', () => {
  let component: DayHeaderComponent;
  let fixture: ComponentFixture<DayHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DayHeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render all its children', () => {
    expect(fixture.debugElement.query(By.css('app-number-day'))).toBeTruthy();

    expect(fixture.debugElement.query(By.css('app-warning-day'))).toBeTruthy();

    expect(
      fixture.debugElement.query(By.css('app-add-activity-button'))
    ).toBeTruthy();
  });
});
