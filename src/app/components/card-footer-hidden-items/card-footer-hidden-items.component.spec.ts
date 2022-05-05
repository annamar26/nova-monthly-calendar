import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFooterHiddenItemsComponent } from './card-footer-hidden-items.component';

describe('CardFooterHiddenItemsComponent', () => {
  let component: CardFooterHiddenItemsComponent;
  let fixture: ComponentFixture<CardFooterHiddenItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFooterHiddenItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFooterHiddenItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(' card footer hidden items component should been created', () => {
    expect(component).toBeTruthy();
  });

  it('should display how many hours hidden items are in the card', () => {
    component.hiddenItems = 3;
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('div').textContent).toContain(
      `${component.hiddenItems} more`
    );
  });

  it('should have a style class', () => {
    component.hiddenItems = 2;
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('div')).toHaveClass('hidden-items');
  });

  it('should not display nothing if there are not hidden items', () => {
    component.hiddenItems = 0;
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('div')).toBeNull();
  });

  // it('is Clicked function changes', () => {
  //  const service : FocusCardService = new FocusCardService()
  // const card : DayCardComponent = new DayCardComponent(service)
  // card.ngOnInit()
  // const hidden : CardFooterHiddenItemsComponent = new CardFooterHiddenItemsComponent(service)
  //   const event= new MouseEvent('click');
  //   hidden.hiddenItems = 2
  //   const element = fixture.debugElement.query(By.css('.hidden-items')).nativeElement
  //   element.dispatchEvent(event);
  //   service.changeState(event);
  //   fixture.detectChanges();

  //   expect(component.clicked).toBe(!component.clicked);
  // });
});
