import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div>
  <input type="text"  [(ngModel)]='a'>
  <input type="text"  [(ngModel)]='b'>
    <p *ngIf='a<b' > min is {{a}} </p>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class App2Component {
  a:number;
  b:number;
  
}