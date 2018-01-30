import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() 
  board: Board;
  @Output()
  createSwimlaneEvent = new EventEmitter<Swimlane>();
  swimlane: Swimlane;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.swimlane = new Swimlane("");
  }

  toggleCreate() {
    this.createIsOpen = !this.createIsOpen;
  }

  sendNewSwimlane(swimlane: Swimlane) {
    this.createSwimlaneEvent.emit(swimlane);
  }

  addSwimlane() {
    //if empty then can't submit
    //potentially some popup alert
    if (this.swimlane.swimlaneName.length < 1) { 
      this.toggleCreate();
      return; 
    }

    this.projectService.createSwimLane(this.board, this.swimlane)
      .subscribe(
      data => {
        this.swimlane = data;
        this.sendNewSwimlane(this.swimlane);
      })
      
      //new story object so that it no longer references sent object
      this.swimlane = new Swimlane("");
      this.toggleCreate();
  }
}
