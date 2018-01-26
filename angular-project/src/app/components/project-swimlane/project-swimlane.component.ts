import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-project-swimlane',
  templateUrl: './project-swimlane.component.html',
  styleUrls: ['./project-swimlane.component.css']
})
export class ProjectSwimlaneComponent implements OnInit {

  stories : Story[] = []; 

  constructor() { 
      this.stories.push(new Story(0, "Story 1", 10)); 
      this.stories.push(new Story(1, "Story 2", 5)); 
  }

  ngOnInit() {
  }

  addStory() {
      this.stories.push(new Story(2, "Story 2", 5)); 
  }

  onDelete(agreed: boolean) {
    this.stories.pop(); 
  }
}
