import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../../models/board.model';
import { Swimlane } from '../../models/swimlane.model';
import { Story } from '../../models/story.model';
import { GlobalEventsManager } from '../../services/global-events.service';

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

  constructor(private globalEventsManager: GlobalEventsManager) {
    //For Navbar
    globalEventsManager.emitShowBurnDownPage.emit(true);
    globalEventsManager.emitShowBoardPage.emit(true);
  }

  ngOnInit() { }

  onDrop(my_story_id: number) {
    //Here we handle the drop and can get the swimlane the story was dropped to. 
    console.log("Drop: story: " + JSON.stringify(my_story_id) + " into swimlane: " + this.getSwimLaneIdWithStory(my_story_id).sid);
  }

  onDrag(my_story_id: number) {
    //Here we handle the drag and can get the swimlane the story was selected from. 
    console.log("Drag: story: " + JSON.stringify(my_story_id) + " from swimlane: " + this.getSwimLaneIdWithStory(my_story_id).sid);
  }

  // Method to obtain swimlane id that contains the story  
  getSwimLaneIdWithStory(m_story_id: number): Swimlane {
    for (const m_swimlane of this.board.swimlanes) {
      for (const m_story of m_swimlane.stories) {
        if (m_story.stId == m_story_id) {
          return m_swimlane;
        }
      }
    }
    return null;
  }

}