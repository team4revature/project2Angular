// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import { MatGridListModule, MatGridList } from '@angular/material/grid-list';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { StoryComponent } from './components/story/story.component';
import { BurndownComponent } from './components/burndown/burndown.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { StoryItemComponent } from './components/story-item/story-item.component';

import { ProjectSwimlaneComponent } from './components/project-swimlane/project-swimlane.component';

import { MatCardModule } from '@angular/material/card';

// services
import { UserService } from './services/user.service';
import { BoardPageComponent } from './components/board-page/board-page.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { BoardItemComponent } from './components/board-item/board-item.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { UserStoriesComponent } from './components/user-stories/user-stories.component';
import { HeaderComponent } from './components/header/header.component';
import { UserStoriesService } from './services/user-stories.service';
import { BoardListService } from './services/board-list-service.service';
import { CreateSwimlaneComponent } from './components/create-swimlane/create-swimlane.component';
import { ProjectPageSwimlanesComponent } from './components/project-page-swimlanes/project-page-swimlanes.component';
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    StoryComponent,
    NavbarComponent,
    BoardPageComponent,
    BoardListComponent,
    BoardItemComponent,
    ProjectPageComponent,
    HeaderComponent,
    ProjectSwimlaneComponent,
    CreateSwimlaneComponent,
    UserStoriesComponent,
    StoryItemComponent,
    ProjectPageSwimlanesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [UserService, BoardListService, UserStoriesService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}