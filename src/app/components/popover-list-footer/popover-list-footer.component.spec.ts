import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverListFooterComponent } from './popover-list-footer.component';

describe('PopoverListFooterComponent', () => {
  let component: PopoverListFooterComponent;
  let fixture: ComponentFixture<PopoverListFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopoverListFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class', () => {
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement.querySelector('div');
    expect(element).toHaveClass('popover-list-footer');
  });

  it('should render buttons', () => {
    fixture.detectChanges();
    const footerButtons =
      fixture.debugElement.nativeElement.querySelector('app-popover-button');

    expect(footerButtons).toBeTruthy();
  });
});
