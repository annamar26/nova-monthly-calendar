import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Position } from 'src/app/interfaces/popover.interface';
import { Activity } from '../../interfaces/data-interfaces';

@Injectable({
  providedIn: 'root',
})
export class OnMouseOverItemService {
  private popoverCaller$ = new Subject<boolean>();
  private position$ = new Subject<Position>();
  private data$ = new Subject<Activity>();
  data!: Activity;
  position: Position = {
    positionX: 0,
    positionY: 0,
  };
  state!: boolean;

  showPopover(data: Activity, element?: HTMLElement): void {
    this.state = true;
    this.popoverCaller$.next(this.state);
    if (element) {
      let coords = element.getBoundingClientRect();
      this.position = {
        positionX:
          coords.x -257,
        positionY: coords.y - 67,
      };
    }
    this.position$.next(this.position);
    this.data = data;
    this.data$.next(this.data);
  }

  hidePopover(): void {
    this.state = false;
    this.popoverCaller$.next(this.state);
  }

  getState$(): Observable<boolean> {
    return this.popoverCaller$.asObservable();
  }

  getPosition$(): Observable<Position> {
    return this.position$.asObservable();
  }
  getData$(): Observable<Activity> {
    return this.data$.asObservable();
  }
}
