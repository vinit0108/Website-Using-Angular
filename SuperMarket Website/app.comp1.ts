import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
   
  <h1>  the value is {{title}} and sum is {{c}}</h1>
  <p class="a">number is {{ans}}</p>
 first number <input type="number" [(ngModel)]="a">
 sec number <input type="number" [(ngModel)]="b">
{{a+b}}
<div *ngIf="a>b"> grater is {{a}}</div>
<div *ngIf="a<b"> greater is {{b}}</div>
  `,
  styleUrls: ['./app.component.css']

})
export class AppComponent1 {
  title = 'app works!';
  a:number;
  b:number;
  c:number;
  ans:string;
  constructor()
  {
      this.a=12;
      this.b=18;
      this.c=this.a+this.b;
      if (this.c%2==0)
          this.ans="even";
          else
          this.ans="odd";

  }
}