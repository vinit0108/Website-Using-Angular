import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <body>
    <br>
    <b>Num1 :</b><input type="number" [(ngModel)]='a'><br>
    <b>Num2 :</b><input type="number" [(ngModel)]='b'><br><br>
    <input type="button" value="ADD" (click)="add()"> &nbsp;
    <input type="button" value="SUB" (click)="sub()"> &nbsp;
    <input type="button" value="MUL" (click)="mul()"> &nbsp;
    <input type="button" value="DIV" (click)="div()"> <br>
    <b> Result is </b><input type="number" [(ngModel)]='c'><br>
</body>
  `,
  styleUrls: ['./app.component.css']
})

export class App4Component {
  a:number;
  b:number;
  c:number;
  

  add(){
      this.c=this.a+this.b;
  }
  sub(){
      this.c=this.a-this.b;
  }
  mul(){
    this.c=this.a*this.b;
  }
  div(){
    this.c=this.a/this.b;
  }

  
}