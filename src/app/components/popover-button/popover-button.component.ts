import { Observable } from 'rxjs';
import { Observable as Wobservable }  from 'windowed-observable';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ServiceDeleteModalService } from 'src/app/services/delete-modal/service-delete-modal.service';
import { Activity } from 'src/app/interfaces/data-interfaces';

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
  activityToDeleteObservable: Wobservable = new Wobservable('activity-to-delete')
  message!: string;
  @Input() data: Activity = {
    AccountName: '',
    ActivityDate: '',
    ActivityID: 0,
    CategoryName: '',
    Comments: '',
    EmployeeID: 0,
    ProjectColor: '',
    ProjectID: 0,
    ProjectName: '',
    StepID: 0,
    TypeID: 0,
    value: 0,
    activeInProject: false,
  };

  constructor(private ServiceDeleteModalService: ServiceDeleteModalService) {}



  handleClickPopoverButton(action: string) {
    if (action === 'update') {
      this.message = 'Update Activity';
      this.modalObservable.publish(true);
      this.modalTitle.publish(this.message);
    } else if (action === 'clone') {
      this.message = 'Clone Activity';
      this.modalObservable.publish(true);
      this.modalTitle.publish(this.message);
    } else if (action === 'delete') {
      this.ServiceDeleteModalService.showModal();
      this.activityToDeleteObservable.publish(this.data)
            }
  }
}
