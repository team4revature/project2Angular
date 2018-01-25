import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task : Task; 
  @Output() onDelete = new EventEmitter<Task>();

  constructor() {
    this.task = new Task(0, "Some random task"); 
  }

  ngOnInit() {
  }

  deleteTask(){
    this.onDelete.emit(this.task); 
  }

}
