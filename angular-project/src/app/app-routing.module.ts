import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {SigninComponent } from './components/signin/signin.component'; 
import { BurndownComponent } from './components/burndown/burndown.component'; // David Graves
import { BoardPageComponent } from './components/board-page/board-page.component';
import { projection } from '@angular/core/src/render3/instructions';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ProjectSwimlaneComponent } from './components/project-swimlane/project-swimlane.component';
import { ModalComponent } from './components/modal/modal.component';

const appRoutes: Routes = [
  { path:'login', component: SigninComponent }, 
  { path:'burndown', component: BurndownComponent }, // David Graves
  { path:'', redirectTo: '/login', pathMatch: 'full'},
  { path:'boardpage/:uid', component: BoardPageComponent}, 
  { path:'', redirectTo: '/login', pathMatch: 'full'},
  { path:'projectpage/:bid', component: ProjectPageComponent}, 
  { path:'swimlane', component: ProjectSwimlaneComponent }, 
];

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
