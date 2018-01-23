// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { StoryComponent } from './components/story/story.component';
import { BurndownComponent } from './components/burndown/burndown.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { BoardPageComponent } from './components/board-page/board-page.component'; 
import { BoardListComponent } from './components/board-list/board-list.component'; 
import { BoardItemComponent } from './components/board-item/board-item.component'; 
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ProjectSwimlaneComponent } from './components/project-swimlane/project-swimlane.component';

import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';

// services
import { UserService } from './services/user.service';
import { BoardListService } from './services/board-list-service.service';
import { CreateSwimlaneComponent } from './components/create-swimlane/create-swimlane.component';



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
    ProjectSwimlaneComponent, CreateSwimlaneComponent
  ],
  imports: [
     BrowserModule,
     FormsModule,
     AppRoutingModule,
     HttpClientModule,
     MatCardModule
  ],
  providers: [ UserService, BoardListService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
