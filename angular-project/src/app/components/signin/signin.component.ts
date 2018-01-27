import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User;
  userDTO: User;
  username: string;
  userId: number;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User(0, "", "", "", "", "", null);
  }

  login() {
    console.log("starting login");
    this.userService.login(this.user)
    console.log("fuck this" , this.userId);
  }
}
