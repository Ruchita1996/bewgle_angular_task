import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      
      radius: 50,
      outerStrokeWidth: 0,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "green",
      animationDuration: 300
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
