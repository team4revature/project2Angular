import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Story } from '../../models/story.model';
import { Swimlane } from '../../models/swimlane.model';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-project-swimlane',
  templateUrl: './project-swimlane.component.html',
  styleUrls: ['./project-swimlane.component.css']
})
export class ProjectSwimlaneComponent implements OnInit {
  
  @Input() swimlane: Swimlane;
  @Output() onDrop = new EventEmitter<number>();
  @Output() onDrag = new EventEmitter<number>(); 

  //Options for Dragula Drag and Drop 
  options: any = {
    removeOnSpill: true,
  }

  stories: Story[] = []; 

  constructor(private dragulaService: DragulaService) {

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

  getIdOfSwimlane() : number {
    return 0; 
  }

  ngOnInit() { }

  newStoryEvent(story: Story) {
    this.swimlane.stories.push(story);
  }

  onDelete(m_story: Story) {
    var index = this.swimlane.stories.indexOf(m_story);
    this.swimlane.stories.splice(index, 1);
  }

}
