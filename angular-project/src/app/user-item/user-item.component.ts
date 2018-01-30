import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';
import { Board } from '../models/board.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})

export class UserItemComponent implements OnInit {
 
  @Input() x=0;
  @Input() y=0;

  user: User;
  board: Board;
  constructor() {
  
   }

  ngOnInit() {

    console.log("inside user oninit item: " , this.user);
  }

  addUser(){
    this.board.scrumTeam.push(this.user);

  }
}
