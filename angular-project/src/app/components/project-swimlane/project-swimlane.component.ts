import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Story } from '../../models/story.model';
import { Swimlane } from '../../models/swimlane.model';
import { SwimlaneService } from '../../services/swimlane.service';
import { ProjectService } from '../../services/project.service';
import { Board } from '../../models/board.model';
import { StoryService } from '../../services/story.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-project-swimlane',
  templateUrl: './project-swimlane.component.html',
  styleUrls: ['./project-swimlane.component.css']
})

export class ProjectSwimlaneComponent implements OnInit {
  @Input()
  swimlane: Swimlane;
  @Input()
  index: number;
  @Output()
  deleteSwimlaneEvent = new EventEmitter<Swimlane>();
  @Output() onDrop = new EventEmitter<number>();
  @Output() onDrag = new EventEmitter<number>(); 

  constructor(
    private swimlaneService: SwimlaneService, 
    private storyService: StoryService, 
    private dragulaService: DragulaService) { 
          //Drop 
    dragulaService.drop.subscribe(value => {
      const [bagName, e, el] = value;
      //Here we grab the id that was set with the story and Dragula component 
      this.onDrop.emit(e.dataset.id);
    });

    //Drag 
    dragulaService.drag.subscribe(value => {
      const [bagName, e, el] = value;
      this.onDrag.emit(e.dataset.id); 
    });
  }
  
  ngOnInit() { }

  //Options for Dragula Drag and Drop 
  options: any = {
    removeOnSpill: false,
  }
  
  getIdOfSwimlane() : number {
    return 0; 
  }
  
  newStoryEvent(story: Story) {
    this.swimlane.stories.push(story);
    console.log(this.swimlane);
  }

  deleteStoryEvent(story: Story) {
    
    this.swimlane.stories.forEach((item, index) => {
      this.storyService.deleteStory(this.swimlane, index);
      if (item === story) this.swimlane.stories.splice(index, 1);
    });
  }

  deleteSwimlane() {
    console.log('deleting swimlane ' + this.swimlane.sid);
    this.deleteSwimlaneEvent.emit(this.swimlane);
  }

  getBackgroundColor(i: number) {
    if(i % 3 == 0) {
      return 'rgba(68,132,206,0.5)';
    } else if(i % 3 == 1) {
      return 'rgba(249,207,0,0.5)';
    } else {
      return 'rgba(241,159,77,0.5)';
    }
  }
  
}
