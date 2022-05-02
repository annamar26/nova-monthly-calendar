import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceDeleteModalService } from 'src/app/services/service-delete-modal.service';

@Component({
  selector: 'app-popover-button',
  templateUrl: './popover-button.component.html',
  styleUrls: ['./popover-button.component.scss']
})
export class PopoverButtonComponent {
  @Input() buttonText:string = 'update';

  modalState!: boolean;
  isVisible:boolean = false;
  modalState$!: Observable<boolean>;
  message!:string;

  constructor (private ServiceDeleteModalService: ServiceDeleteModalService){}

  ngOnInit(): void {
    
  }

  handleClickPopoverButton(action:string) {
    if (action === 'update'){
      this.message = 'Update Activity'
      //console.log(this.message)
    } else if (action === 'clone'){
      this.message = 'Clone an Activity'
      //console.log(this.message)
    } else if (action === 'delete'){
      //console.log(this.message)
      this.ServiceDeleteModalService.showModal()
    }
  }
  
}
