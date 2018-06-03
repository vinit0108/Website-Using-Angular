import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div>
  <b>Number1:</b><input type="number"  [(ngModel)]='a'>
  <b>Number2:</b><input type="number"  [(ngModel)]='b'>

 <br>
 <br>
 <select [(ngModel)]="selected" required (change)="opr()">
   <!--option *ngFor="let aa of aray" [ngValue]="aa" > {{aa}} </option-->
   <option value="Add">Add</option>
   <option value="Sub">Sub</option>
   <option value="Mul">Mul</option>
   <option value="Div">Div</option>
</select>
 <b>Answer:</b><input type="number" [(ngModel)]='c'>
  
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class App6Component {
  a:number;
  b:number;
  c:number;
  selected:String;
  aray:any[];
  constructor(){
    this.aray=["Add","Sub","Mul","Div"];
  }
  
  opr(){
    if(this.selected=="Add"){
      this.c=this.a+this.b;
    }
    
    else if(this.selected=="Sub"){
      this.c=this.a-this.b;
    }
    
    else if(this.selected=="Mul"){
      this.c=this.a*this.b;
    }
    
    else if(this.selected=="Div"){
      this.c=this.a/this.b;
    }
    
  }
  
}