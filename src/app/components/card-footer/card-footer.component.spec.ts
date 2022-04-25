import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFooterComponent } from './card-footer.component';

describe('CardFooterComponent', () => {
  let component: CardFooterComponent;
  let fixture: ComponentFixture<CardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class ', () => {
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement.querySelector('footer');
    expect(element).toHaveClass('card-footer');
  });

  it('should exist the sub components of the footer', () => {
    fixture.detectChanges();
    const footerHours =
      fixture.debugElement.nativeElement.querySelector('card-footer-hours');
    const footerHiddenItems = fixture.debugElement.nativeElement.querySelector(
      'card-footer-hidden-items'
    );

    expect(footerHours).toBeTruthy();
    expect(footerHiddenItems).toBeTruthy();
  });
});
