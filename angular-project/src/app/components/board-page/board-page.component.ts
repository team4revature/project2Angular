import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ProjectService } from '../../services/project.service';
import { User } from '../../models/user.model';
import { BoardListService } from '../../services/board-list-service.service';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.css']
})
export class BoardPageComponent implements OnInit {
  @Input()userDTO;
uid: number;
user: User;
boards: Board[];
constructor(private userService: UserService, private _boardService: BoardListService, 
  private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.uid = params.uid;
      console.log('uid :'+this.uid);
 }); 


}


ngOnInit() {
  this._boardService.getBoardListByUser(this.uid)
    .subscribe( 
      data => { 
        this.boards = data;
        console.log(this.boards); 
      });
  this.userService.getUserbyId(this.uid)
  .subscribe(
    data=>{
      this.user = data;
      console.log(this.user);
    }
  )

  //this.board = new Board(5, "", this.swimlanes, null, null, null);
}
  
}
