import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <table width="50%" border="3">
    <tr *ngFor="let aa of bb">
        <td>{{aa}}</td>
    </tr>
    
    </table>
    <br>
    <h1> Employee details</h1>
    <div *ngFor="let cc of bb1">
    <ul>
    <li>{{cc.Id}}</li>
    <li>{{cc.name}}</li>
    </ul>
    </div>
  `,
  styleUrls: ['./app.component.css']
})

export class App3Component {
  bb:any[];
  bb1:any[];
  
  constructor(){
      this.bb=["yes","no"];
      this.bb1=[{"Id":"123", "name":"dee"}];
  }
  
}