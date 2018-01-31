import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
  export class RegisterComponent implements OnInit {

    user: User;
  
    constructor(private userService: UserService, private router: Router) {}

    registerUser(){
        this.userService.registerUser(this.user);
    }

    ngOnInit() {
        this.user = new User(0, "", "", "", "", "", null);
    }
  
}