import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-day',
  templateUrl: './warning-day.component.html',
  styleUrls: ['./warning-day.component.scss']
})
export class WarningDayComponent implements OnInit{
  @Input() hoursDay:number= 6;

  message!: string ;
  
  ngOnInit(){
    this.message = `You have ${8 - this.hoursDay} missing hours`;
  }
}
