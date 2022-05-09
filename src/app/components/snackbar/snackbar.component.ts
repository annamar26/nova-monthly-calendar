
import { Component, OnDestroy, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataSnackbar } from 'src/app/interfaces/input.interfaces';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SnackbarComponent implements OnInit, OnDestroy{
  message!: string;
  type!: 'default' | 'custom';
  backgroundColor!: string;
  success!: boolean;
  isClicked$!: Subscription;
  data$!: Subscription;
  isVisible!:boolean;

  constructor(private snackbarService: SnackbarService){}
 
  ngOnInit():void{
    this.isClicked$ = this.snackbarService.getIsClick$().subscribe(res => this.isVisible = res);
    this.data$ = this.snackbarService.getDataSnackbar$().subscribe(res => {
      console.log(res)
      this.message = res.message;
      this.type = res.type;
      this.success = res.success;
      setTimeout(() => {
        this.snackbarService.hideSnackbar()
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    this.isClicked$.unsubscribe();
    this.data$.unsubscribe();
  }
}
