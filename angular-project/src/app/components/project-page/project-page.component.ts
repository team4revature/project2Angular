import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Board } from '../../models/board.model';
import { Swimlane } from '../../models/swimlane.model';
import { UserService } from '../../services/user.service';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})

export class ProjectPageComponent implements OnInit {

  user: User;
  board: Board;
  bid: number;
  swimlanes: Swimlane[] = [];

  constructor(private userService: UserService, 
    private projectService: ProjectService,
    private router: Router, private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
        this.bid = params.bid;
        console.log('bid :'+this.bid);
   }); 


  }//constructor end

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('username')).subscribe(user => this.user = user);
    this.projectService.getBoard(8)
      .subscribe( 
        data => { 
          this.board = data;
          console.log(this.board); 
        });
    //this.board = new Board(5, "", this.swimlanes, null, null, null);
  }
}
