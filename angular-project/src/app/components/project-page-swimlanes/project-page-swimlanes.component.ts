import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../../models/board.model';
import { Swimlane } from '../../models/swimlane.model';
import { Story } from '../../models/story.model';
import { GlobalEventsManager } from '../../services/global-events.service';
import { SwimlaneService } from '../../services/swimlane.service';

@Component({
  selector: 'app-project-page-swimlanes',
  templateUrl: './project-page-swimlanes.component.html',
  styleUrls: ['./project-page-swimlanes.component.css']
})
export class ProjectPageSwimlanesComponent implements OnInit {
  @Input() board;
  count: number = 0;
  
  ngOnInit() { }

  //handler for child output
  newSwimlaneEvent(swimlane: Swimlane) {
    this.board.swimlanes.push(swimlane);
    console.log(this.board.swimlanes);
  }

  constructor(private swimlaneService: SwimlaneService, private globalEventsManager: GlobalEventsManager) {
    //For Navbar
    globalEventsManager.emitShowBurnDownPage.emit(true);
    globalEventsManager.emitShowBoardPage.emit(true);
  }
  
  removeSwimlaneEvent(swimlane: Swimlane) {
    this.board.swimlanes.forEach((item, index) => {
      if (item === swimlane) {
        this.board.swimlanes.splice(index, 1);
        this.swimlaneService.deleteSwimlane(this.board, index);
      }
    });
  }

  onDrop(my_story_id: number) {
    this.swimlaneService.updateSwimlanes(this.board.swimlanes).subscribe();
  }

  onDrag(my_story_id: number) {
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
