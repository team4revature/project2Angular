import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Board } from '../../models/board.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  user: User;
  board: Board;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => this.user = user);
  }

}
