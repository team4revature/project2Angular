import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Board } from '../../models/board.model';
import { Swimlane } from '../../models/swimlane.model';
import { UserService } from '../../services/user.service';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalEventsManager } from '../../services/global-events.service';
import { UserListServiceService } from '../../services/user-list-service.service';
import { Story } from '../../models/story.model';

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
    private router: Router, private route: ActivatedRoute, private globalEventsManager: GlobalEventsManager) {

      //Navbar stuff 
      this.globalEventsManager.showNavBar.emit(true); 

      this.route.params.subscribe(params => {
        this.bid = params.bid;
        console.log('bid :'+this.bid);
   }); 
  }

  ngOnInit() {
    this.userService.getUser(localStorage.getItem('username')).subscribe(user => this.user = user);
    this.projectService.getBoard(this.bid)  
      .subscribe( 
        data => { 
          this.board = data; sessionStorage.setItem("BoardId", ("" + data.bid)); //make sure this stays------------------------
          console.log(this.board); 
        });
  }
}
