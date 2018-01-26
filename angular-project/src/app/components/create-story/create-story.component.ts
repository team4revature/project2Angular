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
      //maybe popup for invalid submission
      return;
    }

    this.projectService.createStory(this.swimlane, this.story)
      .subscribe(data => {
        this.swimlane = data;
      })
    this.sendNewStory();
    this.toggleCreate();
  }
}
