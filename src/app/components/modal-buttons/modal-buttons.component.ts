import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-buttons',
  templateUrl: './modal-buttons.component.html',
  styleUrls: ['./modal-buttons.component.scss']
})
export class ModalButtonsComponent implements OnInit{
  @Input () type: 'cancel' | 'confirm' | 'custom' = 'confirm';
  @Input () backgroundColor!: string;
  buttonText!: string;
  message!: string;

  handleClickModalButton(action:string) {
    if (action === 'confirm'){
      this.message = 'yes'
    } else if (action === 'cancel'){
      this.message = 'no'
    } 
  }

  ngOnInit(): void {
    this.buttonText = this.type[0].toUpperCase() + this.type.split('').slice(1).join('');
  }
}
