import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './components/signin/signin.component';

//services
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent, StoryComponent, SigninComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [UserService],
  bootstrap: [SigninComponent]
})
export class AppModule { }
