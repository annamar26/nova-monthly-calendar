import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PItemDiaComponent } from './p-item-dia.component';

describe('PItemDiaComponent', () => {
  let component: PItemDiaComponent;
  let fixture: ComponentFixture<PItemDiaComponent>;
  let p: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PItemDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PItemDiaComponent);
    component = fixture.componentInstance;
    p = fixture.nativeElement.querySelector('p');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct text', () => {
    component.data = {
      AccountName: "iTexico",
      ProjectName: "Project",
      CategoryName: "Category",
      ProjectColor: "green",
      ActivityDate: "2022-05-02T15:28:46.493Z",
      ActivityID: 0,
      Comments: 'Este es un comentario',
      EmployeeID: 0,
      ProjectID: 0,
      StepID: 0,
      TypeID: 0,
      value: 8,
      activeInProject: false
    };
    fixture.detectChanges();
    expect(p.textContent).toContain('iTexico Project - Category');
  });
});
