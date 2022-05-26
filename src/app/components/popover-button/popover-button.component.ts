import { Observable } from 'rxjs';
import { Observable as Wobservable }  from 'windowed-observable';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ServiceDeleteModalService } from 'src/app/services/delete-modal/service-delete-modal.service';

@Component({
  selector: 'app-popover-button',
  templateUrl: './popover-button.component.html',
  styleUrls: ['./popover-button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PopoverButtonComponent {
  @Input() buttonText: string = 'update';
  modalState!: boolean;
  isVisible: boolean = false;
  modalState$!: Observable<boolean>;
  modalTitle: Wobservable = new Wobservable('modal-title');
  modalObservable: Wobservable = new Wobservable('modal-state');
  message!: string;

  constructor(private ServiceDeleteModalService: ServiceDeleteModalService) {}

  ngOnInit(): void {}

  handleClickPopoverButton(action: string) {
    if (action === 'update') {
      this.message = 'Update Activity';
      this.modalObservable.publish(true);
      this.modalTitle.publish(this.message);
    } else if (action === 'clone') {
      this.message = 'Clone an Activity';
      this.modalObservable.publish(true);
      this.modalTitle.publish(this.message);
    } else if (action === 'delete') {
      this.ServiceDeleteModalService.showModal();
         }
  }
}
