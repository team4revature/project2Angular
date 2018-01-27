import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Story } from '../../models/story.model';
import { Swimlane } from '../../models/swimlane.model';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-project-swimlane',
  templateUrl: './project-swimlane.component.html',
  styleUrls: ['./project-swimlane.component.css']
})
export class ProjectSwimlaneComponent implements OnInit {
  
  @Input() swimlane: Swimlane;
  @Output() onDrop = new EventEmitter<number>();
  @Output() onDrag = new EventEmitter<number>(); 

  //Options for Dragula Drag and Drop 
  options: any = {
    removeOnSpill: true,
  }

  stories: Story[] = []; 

  constructor(private dragulaService: DragulaService) {

    console.log("constructor: swimlane: " + this.swimlane); 

    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
      // console.log("value: " + JSON.stringify(value)); 
      // console.log("swimlane: " + JSON.stringify(this.swimlane));
      // console.log("stories: " + JSON.stringify(this.stories) );
      // console.log("Emmiting Dropped"); 
      // this.onDrop.emit(value);
    });
    dragulaService.drop.subscribe(value => {
      const [bagName, e, el] = value;
      console.log('Drop: story id is: ', e.dataset.id);
      this.onDrop.emit(e.dataset.id);
    });
    dragulaService.drag.subscribe(value => {
      const [bagName, e, el] = value;
      console.log('Drag: story id is: ', e.dataset.id);
      this.onDrag.emit(e.dataset.id); 
    });
    dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
  }

  getIdOfSwimlane() : number {
    return 0; 
  }

  ngOnInit() {
    //console.log("ngOnInit: swimlane: " + JSON.stringify(this.swimlane)); 
   }

  newStoryEvent(story: Story) {
    this.swimlane.stories.push(story);
    //console.log('in update swimlane');
    //console.log(JSON.stringify(this.swimlane));
  }

  onDelete(agreed: boolean) {
    this.swimlane.stories.pop();
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    //console.log("onDropModel: " + args); 
    //console.log("swimlane: " + JSON.stringify(this.swimlane));
    // do something else
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    //console.log("onRemoveModel: " + args); 
    //console.log("swimlane: " + JSON.stringify(this.swimlane));
    // do something else
  }

}
