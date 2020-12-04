import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './views/buttons/buttons.component';
import { CalculatorWrapperComponent } from './views/calculator-wrapper/calculator-wrapper.component';

@NgModule({
  declarations: [AppComponent, ButtonsComponent, CalculatorWrapperComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
