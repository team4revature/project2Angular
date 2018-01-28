import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Story } from '../../models/story.model';
import { Swimlane } from '../../models/swimlane.model';
import { SwimlaneService } from '../../services/swimlane.service';
import { ProjectService } from '../../services/project.service';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-project-swimlane',
  templateUrl: './project-swimlane.component.html',
  styleUrls: ['./project-swimlane.component.css']
})
export class ProjectSwimlaneComponent implements OnInit {
  @Input()
  swimlane: Swimlane;
  @Output()
  deleteSwimlaneEvent = new EventEmitter<Swimlane>();

  constructor(private swimlaneService: SwimlaneService) { }

  ngOnInit() { }

  newStoryEvent(story: Story) {
    this.swimlane.stories.push(story);
    console.log(this.swimlane);
  }

  deleteStoryEvent(story: Story) {
    this.swimlane.stories.forEach((item, index) => {
      if (item === story) this.swimlane.stories.splice(index, 1);
    });
  }

  deleteSwimlane() {
    console.log('deleting swimlane ' + this.swimlane.sid);
    this.swimlaneService.deleteSwimlane(this.swimlane);
    this.deleteSwimlaneEvent.emit(this.swimlane);
  }
}
