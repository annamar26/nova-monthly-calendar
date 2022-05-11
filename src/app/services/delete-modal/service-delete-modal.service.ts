import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceDeleteModalService {
  private modalCaller$ = new Subject<boolean>();
  state!: boolean;

  showModal(): void {
    this.state = true;
    this.modalCaller$.next(this.state);
  }

  hideModal(): void {
    this.state = false;
    this.modalCaller$.next(this.state);
  }
  getState$(): Observable<boolean> {
    return this.modalCaller$.asObservable();
  }
}
