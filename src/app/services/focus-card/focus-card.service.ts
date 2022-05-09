import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FocusCardService {
  private _state$ = new Subject<boolean>();
  private _state: boolean = false;
  element$ = new Subject<EventTarget>();
  element!: EventTarget;

  changeState(target?: EventTarget): void {
    if (target) {
      this.element = target;
      this.element$.next(this.element);
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
  onSubscribeElement(): Observable<EventTarget> {
    return this.element$.asObservable();
  }
}
