import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../../models/board.model';
import { Swimlane } from '../../models/swimlane.model';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-project-page-swimlanes',
  templateUrl: './project-page-swimlanes.component.html',
  styleUrls: ['./project-page-swimlanes.component.css']
})
export class ProjectPageSwimlanesComponent implements OnInit {
  @Input() board;

  //handler for child output
  newSwimlaneEvent(swimlane: Swimlane) {
    this.board.swimlanes.push(swimlane);
    console.log(this.board.swimlanes); 
  }

  constructor() {
   }

  ngOnInit() { }

  onDrop(my_obj : Object){
    console.log("Component Was Dropped: " + JSON.stringify(my_obj)); 
  }

  onDrag(my_obj : Object) {
    console.log("Component Was Dragged: " + JSON.stringify(my_obj)); 
  }

  getSwimLaneIdWithStory(m_story_id: number) {
    for(const m_swimlane of this.board.swimlanes) {
      //if()
    }
  }

}
