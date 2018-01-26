import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../models/story.model';
import { Swimlane } from '../../models/swimlane.model';

@Component({
  selector: 'app-project-swimlane',
  templateUrl: './project-swimlane.component.html',
  styleUrls: ['./project-swimlane.component.css']
})
export class ProjectSwimlaneComponent implements OnInit {
  @Input()
  swimlane: Swimlane;
  
  stories: Story[] = []; 

  constructor() { }

  ngOnInit() { }

  newStoryEvent(story: Story) {
    this.swimlane.stories.push(story);
    console.log('in update swimlane');
    console.log(this.swimlane);
  }

  onDelete(agreed: boolean) {
    this.swimlane.stories.pop();
    this.stories.pop(); 
  }
}
