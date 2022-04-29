import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popover-list-footer',
  templateUrl: './popover-list-footer.component.html',
  styleUrls: ['./popover-list-footer.component.scss'],
})
export class PopoverListFooterComponent {
  @Input() buttons: string[] = ['update', 'clone', 'delete'];
}
