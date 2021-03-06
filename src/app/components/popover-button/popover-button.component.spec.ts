import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverButtonComponent } from './popover-button.component';

describe('PopoverButtonComponent', () => {
  let component: PopoverButtonComponent;
  let fixture: ComponentFixture<PopoverButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopoverButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger handleClickPopoverButton on click', () => {
    spyOn(component, 'handleClickPopoverButton');
    let buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.triggerEventHandler('click', component);
    fixture.detectChanges();
    expect(component.handleClickPopoverButton).toHaveBeenCalled();
  });

  it('should display update activity when update', () => {
    component.buttonText = 'update';
    component.handleClickPopoverButton(component.buttonText);
    fixture.detectChanges();
    expect(component.message).toBe('Update Activity');
  });

  it('should display clone activity when clone', () => {
    component.buttonText = 'clone';
    component.handleClickPopoverButton(component.buttonText);
    fixture.detectChanges();
    expect(component.message).toBe('Clone an Activity');
  });

  it('should not display any message when delete', () => {
    component.buttonText = 'delete';
    component.handleClickPopoverButton(component.buttonText);
    fixture.detectChanges();
    expect(component.message).toBeUndefined();
  });
});
