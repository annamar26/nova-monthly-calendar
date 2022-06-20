import { Observable } from 'windowed-observable';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Activity } from './interfaces/data-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  @Input() currentDate!: Date;
  title = 'nova-monthly-calendar';
  @Input() srcData!: Activity[];
  // Insert cross-micro frontend communication

  ngOnChanges(changes: SimpleChanges){
    
  }
}
