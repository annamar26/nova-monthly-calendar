import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceDeleteModalService } from 'src/app/services/delete-modal/service-delete-modal.service';



@Component({
  selector: 'app-modal-buttons',
  templateUrl: './modal-buttons.component.html',
  styleUrls: ['./modal-buttons.component.scss']
})
export class ModalButtonsComponent implements OnInit{
  @Input () type: 'cancel' | 'confirm' | 'custom' = 'confirm';
  @Input () backgroundColor!: string;
  @Input () color!: string;
  buttonText!: string;
  message!: string;

  constructor (private ServiceDeleteModalService: ServiceDeleteModalService){}


  handleClickModalButton(action:string) {
    if (action === 'confirm'){
      this.message = 'yes'
    } else if (action === 'cancel'){
      this.message = 'no'

    }
    this.ServiceDeleteModalService.hideModal();
  
  }

  ngOnInit(): void {
    this.buttonText = this.type[0].toUpperCase() + this.type.split('').slice(1).join('');
  }
}
