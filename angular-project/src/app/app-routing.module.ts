import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoryComponent } from './components/story/story.component'; 
import { SigninComponent } from './components/signin/signin.component'; 
import { BoardPageComponent } from './components/board-page/board-page.component';
import { projection } from '@angular/core/src/render3/instructions';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ProjectSwimlaneComponent } from './components/project-swimlane/project-swimlane.component';
import { ViewStoryComponent } from './components/view-story/view-story.component';

const appRoutes: Routes = [
  { path:'login', component: SigninComponent }, 
  { path:'story', component: StoryComponent }, 
  { path:'boardpage', component: BoardPageComponent}, 
  { path:'', redirectTo: '/login', pathMatch: 'full'},
  { path:'projectpage', component: ProjectPageComponent}, 
  { path:'swimlane', component: ProjectSwimlaneComponent },
  { path:'view-story', component: ViewStoryComponent }
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
