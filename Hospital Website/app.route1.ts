import { Component } from '@angular/core';
import { RouterModule,Routes} from "@angular/router";
import { AppComponent1 } from './app.comp1';
import { AppComponent2 } from './app.comp2';
import { Router } from '@angular/router'; 
import { NgModule }      from '@angular/core';
import { dermatol} from './app.dermatol';
import { surgeon } from './app.surgeon';
import { Pediatrician } from './app.Pediatrician';
import {login} from './app.login';
import {form} from './app.form';

const routes:Routes = [
	{ path: 'dermatol', component:dermatol},
	{ path: 'Pediatrician', component:Pediatrician } ,
	{ path: 'surgeon', component:surgeon},
	{ path: 'login', component:login},
	{ path: 'form', component:form},
	{ path: '', redirectTo: 'component-one', pathMatch: 'full' }
];



export const appRouterModule = RouterModule.forRoot(routes);
