// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import { BoardPageComponent } from './components/board-page/board-page.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { BoardItemComponent } from './components/board-item/board-item.component';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { StoryComponent } from './components/story/story.component';
import { BurndownComponent } from './components/burndown/burndown.component';
import { NavbarComponent } from './components/navbar/navbar.component';
<<<<<<< HEAD

import { BoardPageComponent } from './components/board-page/board-page.component'; 
import { BoardListComponent } from './components/board-list/board-list.component'; 
import { BoardItemComponent } from './components/board-item/board-item.component'; 
import { UserStoriesComponent } from './components/user-stories/user-stories.component';

import { UserStoriesService } from './services/user-stories.service';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { BoardListService } from './services/board-list-service.service';
import { HeaderComponent } from './components/header/header.component';
=======
import { BoardListServiceService } from  './services/board-list-service.service';
>>>>>>> a02fafcb26d2f7a1ba6891dc1e8415edf6aece0b
import { MatCardModule } from '@angular/material/card';

// services
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    StoryComponent,
<<<<<<< HEAD
    NavbarComponent, 
    BoardPageComponent, 
    BoardListComponent, 
    BoardItemComponent,
    UserStoriesComponent,
    ProjectPageComponent, 
    HeaderComponent
=======
    NavbarComponent,
    BoardItemComponent,
    BoardListComponent,
    BoardPageComponent
>>>>>>> a02fafcb26d2f7a1ba6891dc1e8415edf6aece0b
  ],
  imports: [
     BrowserModule,
     FormsModule,
     AppRoutingModule,
     HttpModule,
     HttpClientModule,
     MatCardModule
  ],
<<<<<<< HEAD
  providers: [ UserService, BoardListService, UserStoriesService ],
=======
  providers: [ UserService, BoardListServiceService ],
>>>>>>> a02fafcb26d2f7a1ba6891dc1e8415edf6aece0b
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }