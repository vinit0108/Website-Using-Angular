import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  template: `
  <h2> Surgeon Availability Details </h2>
  <br>
  <br>
  <div> 
       <table width="50%" border="3" >
       <tr>
                <th>Doctors</th>
                <th>DayofAvailability</th>
                <th>Time</th> 
                <th>Take appointment</th> 
                
                 
        </tr>
       <tr *ngFor="let pp of doctors">
         <td>{{pp.name}}</td>
         <td>{{pp.day}}</td>
         <td>{{pp.time}}</td>
         <td><input type="button" value="Appointment"  [routerLink]="['/form']"></td>
  
            
       </tr>
       </table>
  </div>
  <!-- Router Outlet -->
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']

})
export class surgeon {
  doctors:any[]=[{name:"Rajesh",day:"Monday",time:"12:30 PM"},{name:"vijay",day:"Tuesday",time:"10.00 AM"},{name:"Pallavi",day:"Wednesday",time:"11:30 AM"}];

}