import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popover-body',
  templateUrl: './popover-body.component.html',
  styleUrls: ['./popover-body.component.scss'],
})
export class PopoverBodyComponent {
  @Input() comment: string = '';
  @Input() task: string = '';
  @Input() hours: number = 0;
}
