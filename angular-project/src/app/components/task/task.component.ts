import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task : Task; 
  @Output() onDelete = new EventEmitter<Task>();

  constructor(private taskService: TaskService) {
  }

  ngOnInit() { }

  resolveTask() {
    this.task.completed = !this.task.completed;
    this.taskService.updateTask(this.task).subscribe();
  }

  deleteTask() {
    this.onDelete.emit(this.task); 
  }

  getColor() {
    return this.task.completed ? '#8de082' : '#D9D9D9';
  }

} 