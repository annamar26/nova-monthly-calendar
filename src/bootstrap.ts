import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const element: HTMLElement = document.createElement('calendar-component');
const element2: HTMLElement = document.createElement('add-activity-button-component');

interface Elements {
  calendar: HTMLElement,
  button: HTMLElement
}

export const component = (): Elements => {
  return {"calendar": element, "button": element2};
};
