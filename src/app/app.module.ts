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
import { AddActivityButtonComponent } from './components/add-activity-button/add-activity-button.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningDayComponent,
    NumberDayComponent,
    CardFooterHoursComponent,
    TooltipCalendarComponent,
    AddActivityButtonComponent,
    CardFooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
