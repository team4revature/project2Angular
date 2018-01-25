import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {ChartModule, GrowlModule} from 'primeng/primeng'; // David Graves
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // David Graves

// IF BURNDOWN DOESN'T WORK, TRY THIS
// npm install primeng --save
// npm install @angular/animations --save
// 
// PREVIOUSLY TRIED: SHOULD NOT NEED THIS
// npm install ng2-charts --save
// npm install chart.js --save
// typings install dt~chart.js --save --global


import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { StoryComponent } from './components/story/story.component';
import { BurndownComponent } from './components/burndown/burndown.component';

import { MatCardModule } from '@angular/material/card'; 

//services
import { UserService } from './services/user.service';
import { BurndownService } from './services/burndown.service'; // David Graves


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent, 
    StoryComponent,
    BurndownComponent, // David Graves
  ],
  imports: [
     BrowserModule,
     FormsModule,
     AppRoutingModule, 
     HttpClientModule,
     //    NgbModule.forRoot(),
     MatCardModule,
     ChartModule, // David Graves
     GrowlModule, // David Graves
    //  AccordionModule, // David Graves
     BrowserAnimationsModule // David Graves
  ],
  providers: [UserService, BurndownService], // David Graves
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
