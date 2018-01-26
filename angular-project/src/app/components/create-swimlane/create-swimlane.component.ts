import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Board } from '../../models/board.model';
import { Swimlane } from '../../models/swimlane.model';

@Component({
  selector: 'app-create-swimlane',
  templateUrl: './create-swimlane.component.html',
  styleUrls: ['./create-swimlane.component.css']
})

export class CreateSwimlaneComponent implements OnInit {
  createIsOpen: boolean = false;
  @Input() board: Board;
  swimlane: Swimlane;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.swimlane = new Swimlane("");
  }

  toggleCreate() {
    this.createIsOpen = !this.createIsOpen;
  }

  addSwimlane() {
    //if empty then can't submit
    //potentially some popup alert
    if (this.swimlane.swimlaneName.length < 1) { 
      console.log('swimlane name is empty');
      return; 
    }

    console.log('preparing to send swimlane ' + this.swimlane.swimlaneName
      + ' to board ' + this.board.bid);
    this.projectService.createSwimLane(this.board, this.swimlane)
      .subscribe(
      data => {
        this.swimlane = data;
      })
    //send this data back
    //this.board.swimlanes.concat(this.swimlane);
  }
}
