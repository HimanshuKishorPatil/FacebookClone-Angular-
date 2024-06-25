import { Component, NgModule } from '@angular/core';
import { RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

    {path:"home" ,component:HomeComponent}

];
