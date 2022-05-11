import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceDeleteModalService } from 'src/app/services/delete-modal/service-delete-modal.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

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


  constructor(private ServiceDeleteModalService: ServiceDeleteModalService, private snackbarService:SnackbarService) {}

  handleClickModalButton(action: string):void {
    if (action === 'confirm') {
      this.message = 'yes';
      this.snackbarService.showSnackBar();
      this.snackbarService.setDataSnackbar()
    } else if (action === 'cancel') {
      this.message = 'no';
    }
    this.ServiceDeleteModalService.hideModal();
  }

  
}
