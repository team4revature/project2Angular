import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-create-board-pop-up',
  templateUrl: './create-board-pop-up.component.html',
  styleUrls: ['./create-board-pop-up.component.css']
})
export class CreateBoardPopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateBoardPopUpComponent>) { }

  ngOnInit() {
  }

}
