import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardPageComponent } from './components/board-page/board-page.component';

<<<<<<< HEAD
import { StoryComponent } from './components/story/story.component'; 
import { SigninComponent } from './components/signin/signin.component'; 
import { BoardPageComponent } from './components/board-page/board-page.component';
import { projection } from '@angular/core/src/render3/instructions';
import { ProjectPageComponent } from './components/project-page/project-page.component';
//import { BoardPageComponent } from './components/board-page/board-page.component';

const appRoutes: Routes = [
  { path:'login', component: SigninComponent }, 
  { path:'story', component: StoryComponent }, 
  { path:'boardpage', component: BoardPageComponent}, 
  { path:'', redirectTo: '/login', pathMatch: 'full'},
  { path:'projectpage', component: ProjectPageComponent}
=======
import { StoryComponent } from './components/story/story.component';
import {SigninComponent } from './components/signin/signin.component';

const appRoutes: Routes = [
  {path: 'boardpage', component: BoardPageComponent },
  { path: 'login', component: SigninComponent },
  { path: 'story', component: StoryComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
>>>>>>> a02fafcb26d2f7a1ba6891dc1e8415edf6aece0b
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
