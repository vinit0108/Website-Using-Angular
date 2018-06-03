import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  template: `
  <h2>Pediatrician Availability Details</h2>
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
  `,
  styleUrls: ['./app.component.css']

})
export class  Pediatrician {
  doctors:any[]=[{name:"Aishwarya",day:"Tuesday",time:"12:30 PM"},{name:"Vijayalakshmi",day:"Thursday",time:"10.00 AM"},{name:"Pallavi",day:"Saturday",time:"11:30 AM"}];

}