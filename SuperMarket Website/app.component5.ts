import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div>
  Username :<input type="text"  [(ngModel)]="aa"><br>
  Password :<input type="text"  [(ngModel)]='b'><br>
  <input type="button" value="Login" (click)="validate()">

  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class App5Component {
    aa:string;
    b:string;
    c:string;
    flag:number;
 bb:any[];
 i:number;
 constructor(){
     
     this.bb=[{"username":"dee","password":"123"},
                {"username":"deepa","password":"12345"}];
 }

 validate(){
    this.i=0;
    this.flag=0;
    for(this.i=0;this.i<2;this.i++){
        if(this.aa==this.bb[this.i].username){
            if(this.b==this.bb[this.i].password){
                this.c="valid";
                this.flag=1;
            }

        }
    }
    if(this.flag==0){
        this.c="Invalid";
    }
    alert(this.c);
 }
  
}