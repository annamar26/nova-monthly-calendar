import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemDiaComponent } from './item-dia.component';

describe('ItemDiaComponent', () => {
  let component: ItemDiaComponent;
  let fixture: ComponentFixture<ItemDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDiaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDiaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //asi es uno de integracion pasa el input desde el padre al hijo
  /* it('should show TEST INPUT from the parentNode', () => {
		component!.data.AccountName = 'Test AccountName';
		component!.data.ProjectName = 'Test project';
		component!.data.CategoryName = 'Test category';
		const element = fixture.debugElement.query(By.css('app-p-item-dia')).nativeElement;
		fixture.detectChanges();

		expect(element.textContent).toBe('Test AccountName Test project - Test category');
	}); */

  it('should change the color to the color name if the property exist in the input', () => {
    component!.data!.ProjectColor = 'pink';
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.colorFlag');
    const styles = window.getComputedStyle(element);
    expect(styles.backgroundColor).toBe('rgb(255, 192, 203)');
  });

  it('should change the color to the rgb color if the property exist in the input', () => {
    component!.data!.ProjectColor = 'rgb(38, 68, 220)';
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.colorFlag');
    const styles = window.getComputedStyle(element);
    expect(styles.backgroundColor).toBe('rgb(38, 68, 220)');
  });

  it('should change the color to the hex color if the property exist in the input', () => {
    component!.data!.ProjectColor = '#f7e348';
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.colorFlag');
    const styles = window.getComputedStyle(element);
    expect(styles.backgroundColor).toBe('rgb(247, 227, 72)');
  });

  it('should trigger handleMouseover on mouseover', () => {
    spyOn(component, 'handleMouseover');
    let element = fixture.debugElement.query(By.css('.itemDia'));
    element.triggerEventHandler('mouseover', component);
    expect(component.handleMouseover).toHaveBeenCalled();
  });

  it('should trigger handleMouseout on mouseout', () => {
    spyOn(component, 'handleMouseout');

    let element = fixture.debugElement.query(By.css('.itemDia'));

    element.triggerEventHandler('mouseout', component);

    expect(component.handleMouseout).toHaveBeenCalled();
  });

  it('should change isShonw when runnig handleMouseover or handleMouseout', () => {
    const element = fixture.debugElement.query(
      By.css('.p-item-dia')
    ).nativeElement;
    const event = new MouseEvent('mouseover');
    element.dispatchEvent(event);
    component.handleMouseover(element);
    expect(component.isShown).toBeTrue();
    const event2 = new MouseEvent('mouseout');
    element.dispatchEvent(event2);
    component.handleMouseout();
    expect(component.isShown).toBeFalse();
  });
});
