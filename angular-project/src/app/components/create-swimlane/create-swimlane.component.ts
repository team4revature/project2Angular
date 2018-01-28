import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Board } from '../../models/board.model';
import { Swimlane } from '../../models/swimlane.model';
import { SwimlaneService } from '../../services/swimlane.service';

@Component({
  selector: 'app-create-swimlane',
  templateUrl: './create-swimlane.component.html',
  styleUrls: ['./create-swimlane.component.css']
})

export class CreateSwimlaneComponent implements OnInit {
  createIsOpen: boolean = false;
  @Input()
  board: Board;
  @Input()
  index: Number;
  @Output()
  createSwimlaneEvent = new EventEmitter<Swimlane>();
  swimlane: Swimlane;

  constructor(private swimlaneService: SwimlaneService) { }

  ngOnInit() {
    this.swimlane = new Swimlane("");
  }

  toggleCreate() {
    this.createIsOpen = !this.createIsOpen;
  }

  sendNewSwimlane() {
    this.createSwimlaneEvent.emit(this.swimlane);
  }

  addSwimlane() {
    //if empty then can't submit
    //potentially some popup alert
    if (this.swimlane.swimlaneName.length < 1) {
      this.toggleCreate();
      return;
    }

    this.swimlaneService.createSwimlane(this.board, this.swimlane)
      .subscribe(
      data => {
        this.board.swimlanes[this.board.swimlanes.length - 1].sid = data.swimlanes.pop().sid;
      })

    this.board.swimlanes.push(this.swimlane);
    //new story object so that it no longer references sent object
    this.swimlane = new Swimlane("");
    this.toggleCreate();
  }

  getBackgroundColor(i: number) {
    if (i % 3 == 0) {
      return 'rgba(68,132,206,0.5)';
    } else if (i % 3 == 1) {
      return 'rgba(249,207,0,0.5)';
    } else {
      return 'rgba(241,159,77,0.5)';
    }
  }
}
