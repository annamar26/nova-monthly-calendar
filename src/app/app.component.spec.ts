import { Card } from './interfaces/input.interfaces.d';
import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('App', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the given components', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-calendar'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('app-popover'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('app-modal-delete'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('app-snackbar'))).toBeTruthy();
  });


});
