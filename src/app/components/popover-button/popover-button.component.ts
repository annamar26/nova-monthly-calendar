import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-button',
  templateUrl: './popover-button.component.html',
  styleUrls: ['./popover-button.component.scss']
})
export class PopoverButtonComponent {
  @Input() buttonText:string = 'update';

  message!:string;

  handleClickPopoverButton(action:string) {
    if (action === 'update'){
      this.message = 'Update Activity'
      //console.log(this.message)
    } else if (action === 'clone'){
      this.message = 'Clone an Activity'
      //console.log(this.message)
    } else if (action === 'delete'){
      //console.log(this.message)
    }
  }
  
}
