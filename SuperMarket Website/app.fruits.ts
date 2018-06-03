import { Component } from '@angular/core';
import * as myGlobals from './app.global';
@Component({
  selector: 'app-root',
  template:`
  
  <div>
  <p>Total bill is {{total}}</p>
  <b>Select the vegetables you want to buy</b><br><br>
  <input type="checkbox" value="pineapple"  [(ngModel)]='pineapple'>Pineapple
  <input type="checkbox" value="orange"  [(ngModel)]='orange' >Orange
  <input type="checkbox" value="banana"  [(ngModel)]='banana' >Banana
  <p *ngIf='pineapple==true'>Pineapple Rs.30</p>
  <p *ngIf='orange==true'>Orange Rs.40</p>
  <p *ngIf='banana==true'>Banana Rs.20</p><br>
  
 <h3> <input type="button" value="Bill" (click)="getbill()"> </h3>
  <p *ngIf='c==1'>Fruits bill is {{totalsum}} </p><br>
 
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppFruits {
    pineapple:String;
    orange:String;
    banana:String;
    total:number;
    totalsum:number;
    c:number;
    c1:number;

srch:String;
fruits:any[];

constructor(){
    this.c=0;
    this.total=myGlobals.tot;
    
}


   getbill(){
        this.totalsum=0;
        if(this.pineapple){
           this.totalsum=this.totalsum+30;
        }
        if(this.orange){
            this.totalsum=this.totalsum+40;
        }
        if(this.banana){
            this.totalsum=this.totalsum+20;
        }
        this.c=1;
        myGlobals.setValue(myGlobals.tot+this.totalsum);
        this.total=myGlobals.tot;
        
    }

}