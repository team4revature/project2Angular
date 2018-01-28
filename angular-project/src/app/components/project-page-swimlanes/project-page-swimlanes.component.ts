import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../../models/board.model';
import { Swimlane } from '../../models/swimlane.model';
import { Story } from '../../models/story.model';
import { SwimlaneService } from '../../services/swimlane.service';

@Component({
  selector: 'app-project-page-swimlanes',
  templateUrl: './project-page-swimlanes.component.html',
  styleUrls: ['./project-page-swimlanes.component.css']
})
export class ProjectPageSwimlanesComponent implements OnInit {
  @Input() board;

  
  constructor(private swimlaneService: SwimlaneService) { }

  ngOnInit() { }

  //handler for child output
  newSwimlaneEvent(swimlane: Swimlane) {
    this.board.swimlanes.push(swimlane);
  }

  removeSwimlaneEvent(swimlane: Swimlane) {
    this.board.swimlanes.forEach((item, index) => {
      if (item === swimlane) {
        this.board.swimlanes.splice(index, 1);
        this.swimlaneService.deleteSwimlane(this.board, index);
      }
    });
  }
}
