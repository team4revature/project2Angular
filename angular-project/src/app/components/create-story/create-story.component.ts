import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Swimlane } from '../../models/swimlane.model';
import { ProjectService } from '../../services/project.service';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  @Input() 
  swimlane: Swimlane;
  @Output() 
  createStoryEvent = new EventEmitter<Story>();
  story: Story;
  createIsOpen: boolean;

  
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.story = new Story("", 0);
  }

  toggleCreate() {
    this.createIsOpen = !this.createIsOpen;
  }

  sendNewStory() {
    this.createStoryEvent.emit(this.story);
  }

  addStory() {
    if(this.story.storyName.length < 1) {
      return;
    }

    this.projectService.createStory(this.swimlane, this.story)
      .subscribe(data => {
        //update story with id from server
        this.swimlane.stories[this.swimlane.stories.length - 1].stId = data.stId;
        console.log('returned with new swimlane');
      })
    console.log('adding story');
    this.swimlane.stories.push(this.story);
    //this.sendNewStory();
    //new story object so that it no longer references sent object
    this.story = new Story("", 0);
    this.toggleCreate();
  }
}
