import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.component.html',
  styleUrls: ['./view-story.component.css']
})
export class ViewStoryComponent implements OnInit {

  @Input() tasks : Task[] = []; 
  @Input() story : Story; 

  constructor() { 
      //Mock a story 
      this.story = new Story(0, "My Story", 10); 

      //Mock a couple initial tasks
      this.tasks.push(new Task(0, "Task 1")); 
      this.tasks.push(new Task(1, "Task 2")); 
  }

  ngOnInit() {
  }

  addTask(input : string) { 
      this.tasks.push(new Task(this.tasks.length, input)); //"Task " + (this.tasks.length+1))); 
  }

  deleteTask(m_task: Task) {
    var index = this.tasks.indexOf(m_task);
    this.tasks.splice(index, 1);
  }

}
