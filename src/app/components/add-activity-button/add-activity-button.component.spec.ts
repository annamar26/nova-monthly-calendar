import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AddActivityButtonComponent } from './add-activity-button.component';

describe('AddActiityButtonComponent', () => {
  let component: AddActivityButtonComponent;
  let fixture: ComponentFixture<AddActivityButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddActivityButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger handleClick on click', () => {
    spyOn(component, 'handleClick');

    let buttonElement = fixture.debugElement.query(By.css('button'));

    buttonElement.triggerEventHandler('click', component);
    fixture.detectChanges();

    expect(component?.handleClick).toHaveBeenCalled();
  });

  it('should publish a window observable when running handleClick', () => {
    let buttonElement = fixture.debugElement.query(By.css('button'));

    buttonElement.triggerEventHandler('click', component);

    expect(component.isPublished).toBe(true);
  });

  it('should render the correct styles depending on the input', () => {
    expect(
      fixture.debugElement.query(By.css('.general-add-button'))
    ).toBeTruthy();

    const styles = window.getComputedStyle(
      fixture.debugElement.query(By.css('.general-add-button')).nativeElement
    );
    expect(styles.backgroundColor).toBe('rgb(245, 65, 98)');

    component.type = 'day';

    fixture.detectChanges();

    expect(styles.backgroundColor).toBe('rgba(0, 0, 0, 0)');
  });
});
