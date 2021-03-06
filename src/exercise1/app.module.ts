/*
  Tasks:
    1. Complete the tasks in app.component.html
    2. Complete the tasks in box-shadow.directive.ts
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppComponent,
  HeaderComponent,
  PostComponent,
} from './components';

import { BoxShadowDirective } from './box-shadow.directive'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    BoxShadowDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
