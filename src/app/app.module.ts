import { PopoverBodyTextComponent } from './components/popover-body-text/popover-body-text.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
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
import { DayCardComponent } from './components/day-card/day-card.component';
import { PopoverComponent } from './components/popover/popover.component';
import { HeaderPopoverComponent } from './components/header-popover/header-popover.component';
import { PopoverListFooterComponent } from './components/popover-list-footer/popover-list-footer.component';
import { CalendarHeaderTitleComponent } from './components/calendar-header-title/calendar-header-title.component';


registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    WarningDayComponent,
    NumberDayComponent,
    CardFooterHoursComponent,
    AddActivityButtonComponent,
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
    CalendarHeaderTitleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
