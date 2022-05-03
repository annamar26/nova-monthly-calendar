import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PItemDiaComponent } from './p-item-dia.component';

describe('PItemDiaComponent', () => {
  let component: PItemDiaComponent;
  let fixture: ComponentFixture<PItemDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PItemDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PItemDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
