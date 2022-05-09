import { Component, Input, ViewEncapsulation } from '@angular/core';

interface ItemDay {
  AccountName: string;
  ProjectName: string;
  CategoryName: string;
  ProjectColor?: string;
}
@Component({
  selector: 'app-header-popover',
  templateUrl: './header-popover.component.html',
  styleUrls: ['./header-popover.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderPopoverComponent {
  @Input() data: ItemDay = {
    AccountName: 'iTexico',
    ProjectName: 'Project',
    CategoryName: 'Category',
    ProjectColor: 'red',
  };
}
