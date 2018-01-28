import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

import { Story } from '../../models/story.model';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})

export class StoryComponent implements OnInit {

  @Input() 
  story: Story; 
  @Output()
  editStoryEvent = new EventEmitter<Story>(); 
  @Output() 
  onDelete = new EventEmitter<Story>();
  @ViewChild('myModalName') 
  modal: ElementRef;

  constructor(private storyService: StoryService) { } 

  ngOnInit() { }

  deleteStory() {
    this.storyService.deleteStory(this.story);
    this.onDelete.emit(this.story);
  }

}