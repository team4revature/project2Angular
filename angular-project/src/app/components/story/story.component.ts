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

  constructor(private storyService: UserStoriesService) {
    this.story = new Story(1, "Example Story", 10)
   } 

  ngOnInit() { 
    //new Story(50, "My Story", 10); 
    //this.story = new Story(50, "My story", 10); 
    this.storyService.getStoryInformation(0).subscribe(
      service => this.story = service
    ); 
  }


  deleteStory(){
    this.onDelete.emit(true); 
  }
}