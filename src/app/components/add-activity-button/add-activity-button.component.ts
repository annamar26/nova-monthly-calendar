import { Observable } from 'windowed-observable';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-activity-button',
  templateUrl: './add-activity-button.component.html',
  styleUrls: ['./add-activity-button.component.scss'],
})
export class AddActivityButtonComponent {
  @Input () type: string = 'general';
  modalObservable: Observable = new Observable('addActivityModal');
  isPublished: boolean = false;

  handleClick() {
    this.modalObservable.publish(true);
    this.isPublished = true;
  }
}
