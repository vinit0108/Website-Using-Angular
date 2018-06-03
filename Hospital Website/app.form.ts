import { Component } from '@angular/core';
import {details} from './app.pdet';
@Component({
  selector: 'app-root1',
  template: `
  <div>
  <h2>Forms Example</h2>
  <form #form="ngForm" (ngSubmit)="submitForm(form.value)">
      <div class="form-group">
        <label>First Name:</label>
          <input type="text" class="form-control" name="firsname" placeholder="Firstname"   [(ngModel)]='firstname'>
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control" name="lastname" placeholder="Lastname"  [(ngModel)]='lastname'>
      </div>
      <div class="form-group">
        <label>Gender</label>
      </div>
      <!-- Radio and checkboxes work much the same way -->
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Male" [(ngModel)]='gender'>
          Male
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Female" [(ngModel)]='gender'>
          Female
        </label>
      </div>
      <div class="form-group">
        <label>Doctor Name:</label>
          <input type="text" class="form-control" name="doctorconsulted" placeholder="Doctor name"  [(ngModel)]='doctorconsulted'>
      </div>
      <div class="form-group">
        <label>Doctor Profession:</label>
          <input type="text" class="form-control" name="doctprofession" placeholder="Doctor profession"  [(ngModel)]='doctprofession'>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-default" (click)="valid()">Submit</button>
      </div>
    </form>
  
</div>

   <div *ngFor="let p of pdet">
     Name:{{p.firstname}} {{p.lastname}} <br>
     Gender:{{p.gender}}<br>
     Doctor:{{p.doctorconsulted}}<br>  
     Doctor Profession:{{p.doctprofession}}
   </div>
  `,
  styleUrls: ['./app.component.css']

})
export class form 
{
  constructor()
  {}
  pdet:any[];
 firstname:String;
  lastname:String;
    gender:String;
    doctorconsulted:String;  
    doctprofession:String;
    
  valid()
  {
    this.pdet=[{firstname:this.firstname,lastname:this.lastname,gender:this.gender,doctorconsulted:this.doctorconsulted,doctprofession:this.doctprofession}];
  }
}