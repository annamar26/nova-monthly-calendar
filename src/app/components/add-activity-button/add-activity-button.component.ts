import { Observable } from 'windowed-observable';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-activity-button',
  templateUrl: './add-activity-button.component.html',
  styleUrls: ['./add-activity-button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AddActivityButtonComponent {
  @Input() type: 'general' | 'day' = 'general';
  modalObservable: Observable = new Observable('modal-state');
  modalTitle: Observable = new Observable('modal-title');
  isPublished: boolean = false;
  message: string = '';

  handleClick() {
    this.modalObservable.publish(true);
    this.isPublished = true;
    if (this.type === 'general') {
      this.message = 'Create multiple activities';
    }
    if (this.type === 'day') {
      this.message = 'Create activity';
    }
    this.modalTitle.publish(this.message);
  }
}
