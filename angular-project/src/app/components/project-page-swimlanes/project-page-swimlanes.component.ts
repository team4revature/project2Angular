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
  }

  constructor() { }

  ngOnInit() { }
}
