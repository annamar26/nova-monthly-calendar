import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FocusCardService {
  private _state$ = new Subject<boolean>();
  private _state: boolean = false;
  private _element$ = new Subject<HTMLElement>();
  private _element!: HTMLElement;

  changeState(e?: any): void {
    if (e) {
      this._element = e.path[5];
      this._element$.next(this._element);
    }
    this._state = !this._state;
    this._state$.next(this._state);
  }

  getState(): boolean {
    return this._state;
  }

  onSubscribe(): Observable<boolean> {
    return this._state$.asObservable();
  }
  onSubscribeElement(): Observable<HTMLElement> {
    return this._element$.asObservable();
  }
}
