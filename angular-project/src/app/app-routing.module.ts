import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 

import { StoryComponent } from './components/story/story.component'; 
import {SigninComponent } from './components/signin/signin.component'; 
import { BurndownComponent } from './components/burndown/burndown.component'; // David Graves

const appRoutes: Routes = [
  { path:'login', component: SigninComponent }, 
  { path:'story', component: StoryComponent }, 
  { path:'burndown', component: BurndownComponent }, // David Graves
  { path:'', redirectTo: '/login', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes )
  ],
  declarations: [], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
