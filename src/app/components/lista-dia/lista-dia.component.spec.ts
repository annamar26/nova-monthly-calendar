import { FocusCardService } from 'src/app/services/focus-card/focus-card.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDiaComponent } from './lista-dia.component';

describe('ListaDiaComponent', () => {
  let component: ListaDiaComponent;
  let fixture: ComponentFixture<ListaDiaComponent>;
  let array: [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaDiaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDiaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do not create li element if the input is empty', () => {
    component.arrayDia = [];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toBeFalsy();
  });

  it('should create 1 li element with 1 element in the Input', () => {
    component.arrayDia = [];
    component.arrayDia.length = 1;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(1);
  });

  it('should create 3 li element with 3 element in the Input', () => {
    component.arrayDia = [];
    component.arrayDia.length = 3;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(3);
  });

  it('should use subscribe when the subscription is created', () => {
    const service: FocusCardService = new FocusCardService();
    const myComponent: ListaDiaComponent = new ListaDiaComponent(service);
    myComponent.ngOnInit();
    service.changeState();
    expect(myComponent.subscription).not.toBeFalsy();
    expect(myComponent.state).toBeTrue();
  });
});
