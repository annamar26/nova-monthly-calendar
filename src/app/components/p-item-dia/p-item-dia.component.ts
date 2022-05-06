import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Activity } from 'src/app/interfaces/data-interfaces';

@Component({
  selector: 'app-p-item-dia',
  templateUrl: './p-item-dia.component.html',
  styleUrls: ['./p-item-dia.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PItemDiaComponent {
  @Input() data: Activity | undefined;
}
