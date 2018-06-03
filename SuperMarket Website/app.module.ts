import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule,Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { App1Component } from './app.com1';
import { appRouterModule } from "./app.route1";
import { App2Component } from './app.component2';
import { App3Component } from './app.component3';
import { App4Component } from './app.component4';
import { App5Component } from './app.component5';
import { App6Component } from './app.component6';
import { App7Component } from './app.component7';
import { App11Component } from './app.component11';
import { AppVeg } from './app.vegetables';
import { AppFruits } from './app.fruits';
import { AppBeverages} from './app.beverages';




@NgModule({
  declarations: [
  
    AppComponent,
    App1Component,
    App2Component,
    App3Component,
    App4Component,
    App5Component,
    App6Component,
    App7Component,
    App11Component,AppVeg,AppFruits,AppBeverages
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterModule
  ],
  
  providers: [],
  bootstrap: [App11Component]
})
export class AppModule { }
