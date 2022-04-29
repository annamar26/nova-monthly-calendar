import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalendarHeaderTitleComponent } from './calendar-header-title.component';

describe('CalendarHeaderTitleComponent', () => {
  let component: CalendarHeaderTitleComponent;
  let fixture: ComponentFixture<CalendarHeaderTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarHeaderTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarHeaderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text', () => {
    const header = (component.headerTitle = 'Monday');
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement.querySelector('p');
    expect(element.textContent).toContain(`${header}`);
  });

  it('should have a bolder class', () => {
    component.textWidth = 'bolder';
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement.querySelector('p');
    expect(element).toHaveClass('header-title-bolder');
  });

  it('should have a backgroun color', () => {
    component.backgroundColor = 'rgb(255, 192, 203)';
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('p')).nativeElement;
    const styles = window.getComputedStyle(element);
    expect(styles.backgroundColor).toBe('rgb(255, 192, 203)');
  });
});
