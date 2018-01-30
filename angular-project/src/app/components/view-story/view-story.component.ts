import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { Story } from '../../models/story.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.component.html',
  styleUrls: ['./view-story.component.css']
})
export class ViewStoryComponent implements OnInit {

  @Input() story : Story; 
  task: Task;

  constructor(private taskService: TaskService) {
      //Mock a story 
      //this.story = new Story("My Story", 10); 
  }

  ngOnInit() { }

  addTask(input : string) { 
      this.task = new Task(0, input);
      this.taskService.createTask(this.story, this.task).subscribe(
        task => { 
          this.task.tid = task.tid;
          console.log(task);
        });
      this.story.tasks.push(this.task);
  }

  deleteTask(m_task: Task) {
    var index = this.story.tasks.indexOf(m_task);
    this.taskService.deleteTask(this.story, index);
    this.story.tasks.splice(index, 1);
  }
  
}