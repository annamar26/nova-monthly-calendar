import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ServiceDeleteModalService } from 'src/app/services/delete-modal/service-delete-modal.service';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'app-modal-buttons',
  templateUrl: './modal-buttons.component.html',
  styleUrls: ['./modal-buttons.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ModalButtonsComponent{
  @Input() type: 'cancel' | 'confirm' | 'custom' = 'confirm';
  @Input() backgroundColor!: string;
  @Input() color!: string;
  message!: string;
 deleteObservable = new Observable('delete-observable')


  constructor(private ServiceDeleteModalService: ServiceDeleteModalService) {}

  handleClickModalButton(action: string):void {
    if (action === 'confirm') {
      this.message = 'yes';
      this.deleteObservable.publish(true)

    } else if (action === 'cancel') {
      this.message = 'no';
    }
    this.ServiceDeleteModalService.hideModal();
  }

  
}
