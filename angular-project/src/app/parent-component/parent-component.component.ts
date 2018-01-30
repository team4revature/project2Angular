import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  @Input()user;
  @Input()board;
  contextmenu = false;
      contextmenuX = 0;
      contextmenuY = 0;
  constructor() { }

  ngOnInit() {
    console.log("parrent: " , this.user);
  }
  onrightClick(event){
    this.contextmenuX=event.clientX
    this.contextmenuY=event.clientY
    this.contextmenu=true;
}
//disables the menu
disableContextMenu(){
   this.contextmenu= false;
}
}
