import { Component } from '@angular/core';
import { appRouterModule } from "./app.route1";
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { dermatol} from './app.dermatol';
import { surgeon } from './app.surgeon';
import { Pediatrician } from './app.Pediatrician';
@Component({
  selector: 'app-root4',
  template: `
  <h1>WELCOME TO ATK HOSPITAL</h1>
  <br>
     <div> 
            
            
            <input type="button" value="Dermatologist"  [routerLink]="['./dermatol']">
            <input type="button" value="Pediatrician"  [routerLink]="['./Pediatrician']">
            <input type="button" value="surgeon"  [routerLink]="['./surgeon']">
            <input type="button" value="Sample"  [routerLink]="['']">
            <br>
            
            
            
         
     </div>
    <!-- Router Outlet -->
    <router-outlet></router-outlet>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app works!';
}
