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



  ngOnInit() { }

  
}