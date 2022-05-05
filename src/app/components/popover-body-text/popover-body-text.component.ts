import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popover-body-text',
  templateUrl: './popover-body-text.component.html',
  styleUrls: ['./popover-body-text.component.scss'],
})
export class PopoverBodyTextComponent {
  @Input() content: string | undefined;
  @Input() type: 'comment' | 'task' = 'comment';
}
