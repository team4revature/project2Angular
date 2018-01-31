import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { Story } from '../../models/story.model';
import { StoryService } from '../../services/story.service';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';

declare var jQuery:any;

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit, AfterViewInit {

  @ViewChild('myModal') myModal: ElementRef;

  story: Story;
  task: Task;

  constructor(private taskService: TaskService, private storyService: StoryService) { }

  ngOnInit() {
    console.log("in on init");
    this.storyService.openStoryModalEvent.subscribe(
      modalStory => {
        this.story = modalStory;
        jQuery(this.myModal.nativeElement).modal('show'); 
      });
  }

  ngAfterViewInit() {
  }

  addTask(input: string) {
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

  openModalEvent(story: Story) {
    console.log('in event');
  }
}
