import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CONTAINERS } from './Containers';
import { COMPONENTS } from './Components';
import { ChartcardComponent } from './Components/charts/chartcard/chartcard.component';

@NgModule({
  declarations: [
    AppComponent,
    CONTAINERS,
    COMPONENTS,
    ChartcardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
