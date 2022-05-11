import { Observable } from 'windowed-observable';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-activity-button',
  templateUrl: './add-activity-button.component.html',
  styleUrls: ['./add-activity-button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddActivityButtonComponent {
  @Input () type: 'general' | 'day' = 'general';
  modalObservable: Observable = new Observable('modal-state');
  isPublished: boolean = false;

  handleClick() {
    this.modalObservable.publish(true);
    this.isPublished = true;
  }
}
