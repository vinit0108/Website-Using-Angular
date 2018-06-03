import { Component } from '@angular/core';
import * as myGlobals from './app.global';
@Component({
  selector: 'app-root',
  template:`
  
  <div>
  <p >Total bill is {{total}}</p>
  <b>Select the vegetables you want to buy</b><br><br>
  <input type="checkbox" value="carrot"  [(ngModel)]='carrot'>Carrot
  <input type="checkbox" value="potato"  [(ngModel)]='potato' >Potato
  <input type="checkbox" value="tomato"  [(ngModel)]='tomato' >Tomato
  <p *ngIf='carrot==true'>Carrot Rs.20</p>
  <p *ngIf='potato==true'>Potato Rs.30</p>
  <p *ngIf='tomato==true'>Tomato Rs.10</p><br>
  
  <input type="button" value="Bill" (click)="getbill()">
  <p *ngIf='c==1'>Vegetables bill is {{totalsum}} </p><br>
  

  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppVeg {
carrot:String;
potato:String;
tomato:String;
totalsum:number;
c:number;
total:number;


constructor(){
    this.total=myGlobals.tot;
    this.c=0;
 
}


getbill(){
    this.totalsum=0;
    if(this.carrot){
       this.totalsum=this.totalsum+20;
    }
    if(this.potato){
        this.totalsum=this.totalsum+30;
    }
    if(this.tomato){
        this.totalsum=this.totalsum+10;
    }
    this.c=1;
    myGlobals.setValue(myGlobals.tot+this.totalsum);
    this.total=myGlobals.tot;
}

}