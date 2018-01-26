import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Story } from '../../models/story.model';
import { UserStoriesService } from '../../services/user-stories.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})

export class StoryComponent implements OnInit {

  @Input() story: Story; 
  @Output() onDelete = new EventEmitter<boolean>();

  constructor(private storyService: UserStoriesService) { } 

  ngOnInit() { }

  deleteStory() {
    this.onDelete.emit(true); 
  }
}