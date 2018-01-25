import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-swimlane',
  templateUrl: './project-swimlane.component.html',
  styleUrls: ['./project-swimlane.component.css']
})
export class ProjectSwimlaneComponent implements OnInit {
  
  @Input() board;
  
  constructor() { }

  ngOnInit() {
  }
}
