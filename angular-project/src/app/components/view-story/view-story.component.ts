import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.component.html',
  styleUrls: ['./view-story.component.css']
})
export class ViewStoryComponent implements OnInit {

  @Input() story : Story; 

  constructor() {
      //Mock a story 
      this.story = new Story("My Story", 10); 
  }

  ngOnInit() { }

  addTask(input : string) { 
      this.story.tasks.push(new Task(this.story.tasks.length, input));
  }

  deleteTask(m_task: Task) {
    var index = this.story.tasks.indexOf(m_task);
    this.story.tasks.splice(index, 1);
  }
  
}