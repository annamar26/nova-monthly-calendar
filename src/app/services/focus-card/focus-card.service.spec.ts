import { DayCardComponent } from 'src/app/components/day-card/day-card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FocusCardService } from './focus-card.service';
import { By } from '@angular/platform-browser';

describe('FocusCardService', () => {
  let service: FocusCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocusCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /* it('should change the states', () => {
    const triggeringElement = new HTMLElement()
    const event = new MouseEvent('click');
    triggeringElement.dispatchEvent(event)
    service.changeState(event);
    ----------

    let component: DayCardComponent;
    let fixture: ComponentFixture<DayCardComponent>;

    fixture = TestBed.createComponent(DayCardComponent);
    component = fixture.componentInstance;
    component.data = [
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

    const compiled = fixture.debugElement;
    const button = compiled.query(By.css('.hidden-items')).nativeElement
    button.dispatchEvent(new MouseEvent('click'))
    
    expect(service.getState()).toBeTrue();
  }); */
});
