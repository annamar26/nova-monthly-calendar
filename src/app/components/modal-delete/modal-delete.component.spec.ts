import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceDeleteModalService } from 'src/app/services/delete-modal/service-delete-modal.service';

import { ModalDeleteComponent } from './modal-delete.component';
import { ModalButtonsComponent } from '../modal-buttons/modal-buttons.component';

describe('ModalDeleteComponent', () => {
  let component: ModalDeleteComponent;
  let fixture: ComponentFixture<ModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDeleteComponent, ModalButtonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the modal if display is true', () => {
    component.isVisible = true;
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector('.background-modal')
    ).toBeTruthy();

    const styles = window.getComputedStyle(
      fixture.debugElement.nativeElement.querySelector('.background-modal')
    );
    expect(styles.display).toBe('flex');
  });

  it('should not render the modal if display is false', () => {
    component.isVisible = false;
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector('app-modal-delete')
    ).toBeNull();
  });

  it('should render its children buttons', () => {
    component.isVisible = true;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('app-modal-buttons'))
    ).toBeTruthy();
  });

  it('INTEGRATION: should modify the value of the subscription when action', () => {
    const service: ServiceDeleteModalService = new ServiceDeleteModalService();
    const myComponent: ModalDeleteComponent = new ModalDeleteComponent(service);
    myComponent.ngOnInit();
    service.showModal();
    fixture.detectChanges();
    expect(myComponent.isVisible).toBeTrue();
  });
});
