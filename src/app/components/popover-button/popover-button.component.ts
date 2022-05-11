import { Observable } from 'rxjs';
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
  message!: string;

  constructor(private ServiceDeleteModalService: ServiceDeleteModalService) {}

  ngOnInit(): void {}

  handleClickPopoverButton(action: string) {
    if (action === 'update') {
      this.message = 'Update Activity';
    } else if (action === 'clone') {
      this.message = 'Clone an Activity';
    } else if (action === 'delete') {
      this.ServiceDeleteModalService.showModal();
         }
  }
}
