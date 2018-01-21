import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { MatCardModule } from '@angular/material/card'; 
import { SigninComponent } from './components/signin/signin.component';

//services
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent, StoryComponent, SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MatCardModule
  ],
  providers: [UserService],
  bootstrap: [SigninComponent]
})
export class AppModule { }
