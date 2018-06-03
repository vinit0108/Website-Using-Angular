import { Component } from '@angular/core';
import { RouterModule,Routes} from "@angular/router";
import { AppFruits } from './app.fruits';
import { AppVeg } from './app.vegetables';
import {AppBeverages } from './app.beverages';
import { Router } from '@angular/router'; 
import { NgModule }      from '@angular/core';

const routes:Routes = [
	{ path: 'fruits', component:AppFruits  },
    { path: 'vegetables', component:AppVeg  } ,
    { path: 'beverages', component: AppBeverages  }
];



export const appRouterModule = RouterModule.forRoot(routes);
