import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarComponent } from './snackbar.component';

describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnackbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the input message', () => {
    component.message = 'Mensaje de prueba';
    const element = fixture.debugElement.nativeElement.querySelector(
      '.snackbar-container'
    );
    fixture.detectChanges();
    expect(element.innerText).toContain('Mensaje de prueba');
  });

  it('should have green bg if type is default and success is true', () => {
    component.type = 'default';
    component.success = true;
    const element = fixture.debugElement.nativeElement.querySelector(
      '.snackbar-container'
    );
    fixture.detectChanges();
    const styles = window.getComputedStyle(element);
    expect(styles.backgroundColor).toBe('rgb(67, 160, 71)');
  });

  it('should have red bg if type is default and success is false', () => {
    component.type = 'default';
    component.success = false;
    const element = fixture.debugElement.nativeElement.querySelector(
      '.snackbar-container'
    );
    fixture.detectChanges();
    const styles = window.getComputedStyle(element);
    expect(styles.backgroundColor).toBe('rgb(209, 35, 10)');
  });

  it('should have the given bg if type is custom', () => {
    component.type = 'custom';
    component.backgroundColor = 'rgb(234, 153, 153)';
    const element = fixture.debugElement.nativeElement.querySelector(
      '.snackbar-container'
    );
    fixture.detectChanges();
    const styles = window.getComputedStyle(element);
    expect(styles.backgroundColor).toBe('rgb(234, 153, 153)');
  });
});
