import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverBodyComponent } from './popover-body.component';

describe('PopoverBodyComponent', () => {
  let component: PopoverBodyComponent;
  let fixture: ComponentFixture<PopoverBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopoverBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PopoverBodyComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render PopoverBodyComponents children', () => {
    component.comment = 'This is a comment';
    component.task = 'This is a ticket';
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('app-popover-body-text'))
    ).toBeTruthy();
    component.hours = 3;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('card-footer-hours'))
    ).toBeTruthy();
  });
});
