import { Component, OnInit, Input } from '@angular/core';
import { UserListServiceService } from '../../services/user-list-service.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-add-users-to-project',
  templateUrl: './add-users-to-project.component.html',
  styleUrls: ['./add-users-to-project.component.css']
})
export class AddUsersToProjectComponent implements OnInit {
  @Input()board;
  users: User[];

  contextmenu = false;
  contextmenuX = 0;
  contextmenuY = 0;
  constructor(private _userListService: UserListServiceService) { 
    this._userListService.getAllUsers().subscribe(
      data =>{
        this.users=data;
        console.log("users list: " , this.users);
      }
    );
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

  ngOnInit() {

  }

}
