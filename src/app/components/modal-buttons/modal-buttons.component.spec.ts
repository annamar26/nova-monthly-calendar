import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ModalButtonsComponent } from './modal-buttons.component';

describe('ModalButtonsComponent', () => {
  let component: ModalButtonsComponent;
  let fixture: ComponentFixture<ModalButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('confirm button should trigger handleClickModalButton on click', () => {
    spyOn(component, 'handleClickModalButton');

    let buttonElement = fixture.debugElement.query(By.css('.confirm-button'));

    buttonElement.triggerEventHandler('click', component);
    fixture.detectChanges();

    expect(component?.handleClickModalButton).toHaveBeenCalled();
  });

  it('confirm button should send a affirmative message', () => {
    component.type = 'confirm';
    component.handleClickModalButton(component.type)

    let buttonElement = fixture.debugElement.query(By.css('.confirm-button'));

    fixture.detectChanges();

    expect(component.message).toBe('yes');
  });

  it('cancel button should send a negative message', () => {
    component.type = 'cancel';
    component.handleClickModalButton(component.type)

    let buttonElement = fixture.debugElement.query(By.css('.cancel-button'));

    fixture.detectChanges();

    expect(component.message).toBe('no');
  });
});
