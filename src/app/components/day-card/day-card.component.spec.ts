import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCardComponent } from './day-card.component';
import { FocusCardService } from 'src/app/services/focus-card/focus-card.service';

describe('DayCardComponent', () => {
  let component: DayCardComponent;
  let fixture: ComponentFixture<DayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DayCard component', () => {
    expect(component).toBeTruthy();
  });

  it('should create DayCard components children', () => {
    component.day = 1;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('app-day-header'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('app-lista-dia'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('card-footer'))).toBeTruthy();
  });

  it('should use subscribe when the subscription is created and change state', () => {
    const service: FocusCardService = new FocusCardService();
    const myComponent: DayCardComponent = new DayCardComponent(service);
    myComponent.ngOnInit();
    service.changeState();
    expect(myComponent.subscription).not.toBeFalsy();
    expect(myComponent.state).toBeTrue();
  });

  it('should set hiddenItems correctly', () => {
    const service: FocusCardService = new FocusCardService();
    const myComponent: DayCardComponent = new DayCardComponent(service);
    myComponent.data = [
      {
        AccountName: 'Itexico',
        ActivityDate: '',
        ActivityID: 0,
        CategoryName: 'Categoria',
        Comments: 'React and storybook1',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Project1',
        StepID: 0,
        Task: 'Nova Menu',
        TypeID: 0,
        value: 2,
        activeInProject: true,
      },
      {
        AccountName: 'Itexico',
        ActivityDate: '',
        ActivityID: 0,
        CategoryName: 'Categoria',
        Comments: 'React and storybook2',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Project1',
        StepID: 0,
        Task: 'Nova Menu',
        TypeID: 0,
        value: 2,
        activeInProject: true,
      },
      {
        AccountName: 'Itexico',
        ActivityDate: '',
        ActivityID: 0,
        CategoryName: 'Categoria',
        Comments: 'React and storybook3',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Project1',
        StepID: 0,
        Task: 'Nova Menu',
        TypeID: 0,
        value: 2,
        activeInProject: true,
      },
      {
        AccountName: 'Itexico',
        ActivityDate: '',
        ActivityID: 0,
        CategoryName: 'Categoria',
        Comments: 'React and storybook3',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Project1',
        StepID: 0,
        Task: 'Nova Menu',
        TypeID: 0,
        value: 2,
        activeInProject: true,
      },
      {
        AccountName: 'Itexico',
        ActivityDate: '',
        ActivityID: 0,
        CategoryName: 'Categoria',
        Comments: 'React and storybook3',
        EmployeeID: 0,
        ProjectColor: 'blue',
        ProjectID: 0,
        ProjectName: 'Project1',
        StepID: 0,
        Task: 'Nova Menu',
        TypeID: 0,
        value: 2,
        activeInProject: true,
      },
    ];
    myComponent.ngOnInit();
    expect(myComponent.hiddenItems).toBe(2);
  });

  it('should set hiddenItems correctly', () => {
    component.data = [];
    component.data.length = 1;
    component.ngOnInit();
    expect(component.hiddenItems).toBe(0);
  });

  it('should set element when subscribing', () => {
    const service: FocusCardService = new FocusCardService();
    const myComponent: DayCardComponent = new DayCardComponent(service);
    myComponent.ngOnInit();
    const event = {
      composedPath: jasmine.createSpy().and.returnValue([]),
    };
    service.changeState(event.composedPath());
    fixture.detectChanges();

    expect(myComponent.element).toBeDefined();
  });
});
