import { NgIf } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DataSnackbar } from 'src/app/interfaces/input.interfaces';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

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
    fixture.detectChanges()
   
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should show the snackbar', () => {
    const service: SnackbarService = new SnackbarService();
    const myComponent: SnackbarComponent = new SnackbarComponent(service);
    
    myComponent.ngOnInit()
    service.showSnackBar()
    
    fixture.detectChanges();
    
    
    
    expect(myComponent.isVisible).toBeTrue()
   
  });
  it('should set the snackbar data', () => {
    const service: SnackbarService = new SnackbarService();
    const myComponent: SnackbarComponent = new SnackbarComponent(service);
    
    myComponent.ngOnInit()
    service.setDataSnackbar({
      message:"holi",
      backgroundColor: undefined,
      success: true,
      type: 'default'
    })
    
    fixture.detectChanges();
    
    
    
    expect(myComponent.message).toBeDefined()
    expect(myComponent.success).toBeDefined()
    expect(myComponent.type).toBeDefined()
    
  });
 
});
