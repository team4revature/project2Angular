import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.css']
})
export class UserStoriesComponent implements OnInit {
  story : Story; 


  constructor() { }

  ngOnInit() {
  }

}