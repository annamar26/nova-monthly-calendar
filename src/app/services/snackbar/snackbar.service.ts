import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataSnackbar } from 'src/app/interfaces/input.interfaces';


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  isClicked: boolean = false;
  data!: DataSnackbar; 
  private snackbarCaller$ = new Subject<boolean>();
  private snackbarInfoCaller$ = new Subject<DataSnackbar>();

  showSnackbar():void{
    this.isClicked = true;
    this.data = {
      message: 'The activity has been deleted successfully',
      type: 'default',
      success: true
    }
    this.snackbarCaller$.next(this.isClicked);
    this.snackbarInfoCaller$.next(this.data);
  }

  hideSnackbar():void{
    this.isClicked = false;
    this.snackbarCaller$.next(this.isClicked);
  }

  getIsClick$():Observable<boolean>{
    return this.snackbarCaller$.asObservable();
  }

  getDataSnackbar$():Observable<DataSnackbar>{
    return this.snackbarInfoCaller$.asObservable();
  }
}
