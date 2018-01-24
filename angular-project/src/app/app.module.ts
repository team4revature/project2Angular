// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { BoardListServiceService } from './services/board-list-service.service';
import { MatCardModule } from '@angular/material/card';

// services
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    StoryComponent,
    NavbarComponent,
    BoardItemComponent,
    BoardListComponent,
    BoardPageComponent
  ],
  imports: [
     BrowserModule,
     FormsModule,
     AppRoutingModule,
     HttpClientModule,
     MatCardModule
  ],
  providers: [ UserService, BoardListServiceService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
