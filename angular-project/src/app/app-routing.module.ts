import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoryComponent } from './components/story/story.component'; 
import {SigninComponent } from './components/signin/signin.component'; 
import { BurndownComponent } from './components/burndown/burndown.component'; // David Graves
import { BoardPageComponent } from './components/board-page/board-page.component';
import { projection } from '@angular/core/src/render3/instructions';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ProjectSwimlaneComponent } from './components/project-swimlane/project-swimlane.component';
import { ModalComponent } from './components/modal/modal.component';

const appRoutes: Routes = [
  { path:'login', component: SigninComponent }, 
<<<<<<< HEAD
  { path:'boardpage', component: BoardPageComponent}, 
  { path:'', redirectTo: '/login', pathMatch: 'full'},
  { path:'projectpage', component: ProjectPageComponent}, 
  { path:'swimlane', component: ProjectSwimlaneComponent }
=======
  { path:'story', component: StoryComponent }, 

  { path:'burndown', component: BurndownComponent }, // David Graves
  { path:'', redirectTo: '/login', pathMatch: 'full'},
  { path:'boardpage/:uid', component: BoardPageComponent}, 
  { path:'', redirectTo: '/login', pathMatch: 'full'},
  { path:'projectpage/:bid', component: ProjectPageComponent}, 
  { path:'swimlane', component: ProjectSwimlaneComponent }, 
  { path:'view-story', component: StoryComponent }
>>>>>>> 5c8deb015243e7d5b8d65dfa6cd55da0532a7206
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
