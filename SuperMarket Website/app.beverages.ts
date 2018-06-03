import { Component } from '@angular/core';
import * as myGlobals from './app.global';
@Component({
  selector: 'app-root',
  template:`
  
  <div>
  <p>Total bill is {{total}}</p>
  <b>Select the Beverages</b><br><br>
  <input type="checkbox" value="Coffee"  [(ngModel)]='a'>Coffee
  <input type="checkbox" value="Tea"  [(ngModel)]='b' >Tea

  <p *ngIf='a==true'>Coffee Rs.10</p>
  <p *ngIf='b==true'>Tea Rs.7</p><br><br>
  
  <input type="button" value="Bill" (click)="getbill()">
  <p *ngIf='c==1'>Total bill is {{totalsum}} </p><br>
  </div>
  
  `,
  styleUrls: ['./app.component.css']
})

export class AppBeverages {
a:String;
b:String;
c:number;
total:number;
totalsum:number;
constructor(){
    this.total=myGlobals.tot;
}
getbill(){
    this.totalsum=0;
    if(this.a){
       this.totalsum=this.totalsum+10;
    }
    if(this.b){
        this.totalsum=this.totalsum+7;
    }
  
    this.c=1;
    myGlobals.setValue(myGlobals.tot+this.totalsum);
    this.total=myGlobals.tot;
    
}

}