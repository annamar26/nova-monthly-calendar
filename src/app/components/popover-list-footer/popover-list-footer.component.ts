import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-popover-list-footer',
  templateUrl: './popover-list-footer.component.html',
  styleUrls: ['./popover-list-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopoverListFooterComponent {
  @Input() buttons: string[] = ['update', 'clone', 'delete'];
}
