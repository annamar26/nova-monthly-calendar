import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Activity } from '../data-service/data-interfaces';

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
  private data$ = new Subject<Activity>()
  data!: Activity
  position: Position = {
    positionX: 0,
    positionY: 0,
  };
  state!: boolean;
  

  showPopover(event:any, data: Activity): void {
    this.state = true;
    this.popoverCaller$.next(this.state);
    
       this.position = {
      positionX: event.srcElement.parentNode.getBoundingClientRect().x - event.srcElement.parentNode.getBoundingClientRect().left,
      positionY:  +event.target.parentNode.offsetTop - 67
    }; this.position$.next(this.position);
    console.log(event.srcElement.parentNode.getBoundingClientRect())
    console.log(this.position)

    // this.position$.next(this.position);
    // let rect = event.getBoundingClientRect();
    // this.position = {
    //   positionX: rect.left,
    //   positionY: (rect.top - rect.bottom) / 2,
    // };
this.data = data
this.data$.next(this.data);  }

  hidePopover(event: any): void {
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
