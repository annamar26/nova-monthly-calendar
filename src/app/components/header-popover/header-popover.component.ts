import { Component, Input } from '@angular/core';

interface ItemDay{
  AccountName: string,
  ProjectName: string,
  CategoryName: string;
  ProjectColor?: string
  }
@Component({
  selector: 'app-header-popover',
  templateUrl: './header-popover.component.html',
  styleUrls: ['./header-popover.component.scss']
})
export class HeaderPopoverComponent {
  @Input() data: ItemDay = {
    AccountName: "iTexico",
    ProjectName: "Project",
    CategoryName: "Category"
   
  }
}
