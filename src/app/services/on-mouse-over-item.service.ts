import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Position {
  positionX: number;
  positionY: number;
}

@Injectable({
  providedIn: 'root',
})
export class OnMouseOverItemService {
  private popoverCaller$ = new Subject<boolean>();
  private position$ = new Subject<Position>();
  position: Position = {
    positionX: 0,
    positionY: 0,
  };
  state!: boolean;

  showPopover(event:any): void {
    this.popoverCaller$.next(this.state);
    this.state = false;
    this.position$.next(this.position);
    let rect = event.getBoundingClientRect();
    this.position = {
      positionX: rect.left,
      positionY: (rect.top - rect.bottom) / 2,
    };
  }

  hidePopover(event: any): void {
    this.popoverCaller$.next(this.state);
    this.state = true;
    this.position$.next(this.position);
    this.position = {
      positionX: event.clientX,
      positionY: event.clientY,
    };
  }

  getState$(): Observable<boolean> {
    return this.popoverCaller$.asObservable();
  }

  getPosition$(): Observable<Position> {
    return this.position$.asObservable();
  }
}
