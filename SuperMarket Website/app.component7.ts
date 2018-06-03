import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <fieldset>
  <body>
  <legend>CHECKBOX</legend>
  <b>
  <input type="checkbox" value="Coffee"  [(ngModel)]='a' >Coffee
  <input type="checkbox" value="Tea"  [(ngModel)]='b' >Tea
  </b>
  <p *ngIf='a==true'>Coffee</p>
  <p *ngIf='b==true'>Tea</p><br><br><b>Gender</b>
  <input type="radio" id="dee" value="Male" [(ngModel)]='c' >
  
  <input type="radio" id="dee" value="Female" [(ngModel)]='c' >
  <input type="button" value="Reverse" (click)="reverse()">
  <p>{{c}}</p>
  <br>
  <br>
  </body>
  </fieldset>
  `,
  styleUrls: ['./app.component.css']
})

export class App7Component {
a:String;
b:String;
c:String;

reverse(){
  this.c=this.c.split('').reverse().join('');
}
}