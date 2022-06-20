
import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SnackbarComponent implements OnInit{
  message!: string;
  type!: 'default' | 'custom';
  backgroundColor: string |undefined;
  success!: boolean;
 
  isVisible:boolean | undefined;
  snackbarObservable = new Observable('snackbar-observable')
  constructor(){}
 
  ngOnInit():void{
   
   this.snackbarObservable.subscribe((res)=>{
    this.message = res.message;
    this.type= res.type;
    this.success= res.success;
    this.isVisible = true
    setTimeout(() => {
     this.isVisible = false
    }, 3000);
   })
  }

 }
