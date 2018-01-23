import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BoardPageComponent } from './components/board-page/board-page.component';

import { StoryComponent } from './components/story/story.component';
import {SigninComponent } from './components/signin/signin.component';

const appRoutes: Routes = [
  {path: 'boardpage', component: BoardPageComponent },
  { path: 'login', component: SigninComponent },
  { path: 'story', component: StoryComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
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
