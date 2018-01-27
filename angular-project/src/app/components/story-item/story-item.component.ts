import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent implements OnInit {

  @Input() story: Story; 

  constructor() { }

  ngOnInit() {
    //TODO: get story from Input or Service
    this.story = new Story("My story", 10); 
  }

}