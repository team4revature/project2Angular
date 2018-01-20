import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { MatCardModule } from '@angular/material/card'; 
import { SigninComponent } from './components/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,StoryComponent, SigninComponent
  ],
  imports: [
    BrowserModule, MatCardModule
  ],
  providers: [],
  bootstrap: [SigninComponent]
})
export class AppModule { }
