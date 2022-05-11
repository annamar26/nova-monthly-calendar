
import { Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { Subscription } from 'rxjs';
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
  backgroundColor: string |undefined;
  success!: boolean;
  isClicked$!: Subscription;
  data$!: Subscription;
  isVisible:boolean | undefined;

  constructor(private snackbarService: SnackbarService){}
 
  ngOnInit():void{
    this.getIsVisible();
    this.getData();
   
  }

  getData() {
    this.data$ = this.snackbarService.getDataSnackbar$().subscribe(res => {
      this.message = res.message;
      this.type = res.type;
      this.success = res.success;
      this.backgroundColor = res.backgroundColor!;
        });
  }

  getIsVisible() {
    this.isClicked$ = this.snackbarService.getIsClick$().subscribe(res => {
      this.isVisible = res;
      setTimeout(() => {
        this.snackbarService.hideSnackbar();
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    this.isClicked$.unsubscribe();
    this.data$.unsubscribe();
  }
}
