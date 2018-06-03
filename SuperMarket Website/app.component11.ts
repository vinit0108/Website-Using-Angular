import { Component } from '@angular/core';
import { appRouterModule } from "./app.route1";
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppVeg } from './app.vegetables';
import { AppFruits } from './app.fruits';
import { AppBeverages} from './app.beverages';
import * as myGlobals from './app.global';

@Component({
  selector: 'app-root',
  template:`
  <fieldset>
  <body >
  <legend><h1>SUPER MARKET</h1></legend>
  <div> <b>Search items here</b>
  <br>
  <input type="text" name="srch" [(ngModel)]='srch' required>
        <input type="button" value="Search" (click)="search()">
        <p>{{msg}}</p>
            <a  [routerLink]="['/vegetables']">Vegetables</a>
            <a  [routerLink]="['/fruits']">Fruits</a>
            <a  [routerLink]="['/beverages']">Beverages</a>
        </div>
       
        
  </body>
  

  <!-- Router Outlet -->
  <router-outlet></router-outlet>
  </fieldset>

  `,
  styleUrls: ['./app.component.css']
})

export class App11Component {
    c1:number;
    msg:String;
    total:number;
    i:number;
    constructor(){
       myGlobals.setValue(0);
        this.msg="";
        this.veg=["carrot","potato","tomato","onion","cabbage","pineapple","orange","banana","grapes","apple","tea","coffee"];
    }

    x(){
        alert("yes");
    }
    srch:String;
    veg:any[];
    search(){
        this.i=0;
        this.c1=0;
        for(this.i=0; this.i<this.veg.length; this.i++ ){
            
                if(this.srch==this.veg[this.i]){
                   this.msg="Item is available";
                   this.c1=1;
                }
        }
        if(this.c1==0){
            this.msg="Item is out of stock";
        }
    }

}