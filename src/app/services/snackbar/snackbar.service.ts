import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataSnackbar } from 'src/app/interfaces/input.interfaces';


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  isClicked!: boolean;
  data!: DataSnackbar;
  private snackbarCaller$ = new Subject<boolean>();
  private snackbarInfoCaller$ = new Subject<DataSnackbar>();

  showSnackBar(): void {
     this.isClicked = true;
      this.snackbarCaller$.next(this.isClicked);
     }

  setDataSnackbar(data?: DataSnackbar): void {

    if (!data) {
      this.data = {
        message: 'The activity has been deleted successfully',
        type: 'default',
        success: true
      }
    } else {
      this.data = {
        message: data.message,
        type: data.type,
        success: data.success,
        backgroundColor: data.backgroundColor
      }
    }


    this.snackbarInfoCaller$.next(this.data);
  }

  hideSnackbar(): void {
    this.isClicked = false;
    this.snackbarCaller$.next(this.isClicked);
  }

  getIsClick$(): Observable<boolean> {
    return this.snackbarCaller$.asObservable();
  }

  getDataSnackbar$(): Observable<DataSnackbar> {
    return this.snackbarInfoCaller$.asObservable();
  }
}
