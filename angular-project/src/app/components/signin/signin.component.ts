import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';

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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = new User(0, "", "", "", "", "", null);
  }

  login() {
    this.userService.login(this.user);
    // .subscribe(returnedUser =>{ sessionStorage.setItem('user', JSON.stringify(returnedUser))});
    
  }
}
