import { Injectable } from '@angular/core';

@Injectable()
export class BoardListService {

 public boardlist = [
   {'bid' : 1, 'bName' : 'project1'},
   {'bid' : 2, 'bName' : 'project2'},
   {'bid' : 3, 'bName' : 'project3'},
   {'bid' : 4, 'bName' : 'project4'},
 ];
  constructor() { }

  getBoardListByUser() {
    return [
      {'bid' : 1, 'bName' : 'project1'},
      {'bid' : 2, 'bName' : 'project2'},
      {'bid' : 3, 'bName' : 'project3'},
      {'bid' : 4, 'bName' : 'project4'},
    ];
  }

}
