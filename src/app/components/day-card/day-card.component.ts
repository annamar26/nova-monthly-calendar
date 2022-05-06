import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/interfaces/data-interfaces';
import { FocusCardService } from 'src/app/services/focus-card/focus-card.service';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DayCardComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() data!: Array<Activity> | undefined
  @Input() day!: undefined | number;

  totalHours: number = 0
  hiddenItems!: number;
  subscription!: Subscription;
  element!: HTMLElement;
  elementSubscription!: Subscription;
  state!: boolean;
  focusableElemenet!: HTMLElement;

  @ViewChild('card') card!: ElementRef;

  constructor(private _focusCardService: FocusCardService) { }

  ngOnInit(): void {
    this.subscription = this._focusCardService
      .onSubscribe()
      .subscribe((state$) => (this.state = state$));
    this.elementSubscription = this._focusCardService
      .onSubscribeElement()
      .subscribe((element$) => (this.element = element$));
    if (this.data?.length) {
      this.data!.forEach((activity?) => (this.totalHours += activity.value)); 
      this.hiddenItems = this.data!.length <= 3 ? 0 : this.data!.length - 3;
    }


  }

  ngAfterViewInit() {
    this.focusableElemenet = this.card.nativeElement;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
