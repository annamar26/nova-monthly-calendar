import en from '@angular/common/locales/en';
import { DayCardComponent } from 'src/app/components/day-card/day-card.component';
import { PopoverBodyTextComponent } from './components/popover-body-text/popover-body-text.component';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WarningDayComponent } from './components/warning-day/warning-day.component';
import { CardFooterHiddenItemsComponent } from './components/card-footer-hidden-items/card-footer-hidden-items.component';
import { NumberDayComponent } from './components/number-day/number-day.component';
import { CardFooterHoursComponent } from './components/card-footer-hours/card-footer-hours.component';
import { TooltipCalendarComponent } from './components/tooltip-calendar/tooltip-calendar.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { PopoverButtonComponent } from './components/popover-button/popover-button.component';
import { DayHeaderComponent } from './components/day-header/day-header.component';
import { PopoverBodyComponent } from './components/popover-body/popover-body.component';
import { AddActivityButtonComponent } from './components/add-activity-button/add-activity-button.component';
import { ItemDiaComponent } from './components/item-dia/item-dia.component';
import { ListaDiaComponent } from './components/lista-dia/lista-dia.component';
import { PopoverComponent } from './components/popover/popover.component';
import { HeaderPopoverComponent } from './components/header-popover/header-popover.component';
import { PopoverListFooterComponent } from './components/popover-list-footer/popover-list-footer.component';
import { CalendarHeaderTitleComponent } from './components/calendar-header-title/calendar-header-title.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ModalButtonsComponent } from './components/modal-buttons/modal-buttons.component';
import { PItemDiaComponent } from './components/p-item-dia/p-item-dia.component';
import { WeekRowComponent } from './components/week-row/week-row.component';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { createCustomElement } from '@angular/elements';
import 'zone.js';
import { APP_BASE_HREF } from '@angular/common';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    WarningDayComponent,
    NumberDayComponent,
    CardFooterHoursComponent,
    CardFooterComponent,
    PopoverButtonComponent,
    TooltipCalendarComponent,
    DayHeaderComponent,
    AddActivityButtonComponent,
    PopoverBodyComponent,
    PopoverBodyTextComponent,
    CardFooterHiddenItemsComponent,
    ItemDiaComponent,
    ListaDiaComponent,
    DayCardComponent,
    ListaDiaComponent,
    PopoverComponent,
    HeaderPopoverComponent,
    PopoverListFooterComponent,
    CalendarHeaderTitleComponent,
    SnackbarComponent,
    CardFooterHoursComponent,
    DayCardComponent,
    ModalDeleteComponent,
    ModalButtonsComponent,
    PItemDiaComponent,
    WeekRowComponent,
    CalendarHeaderComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [AppComponent, AddActivityButtonComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const calendar = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('calendar-component', calendar);

    const addButton = createCustomElement(AddActivityButtonComponent, {
      injector: this.injector,
    });
    customElements.define('add-activity-button-component', addButton);
  }
}
