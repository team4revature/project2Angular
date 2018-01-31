import { Swimlane } from './swimlane.model';
import { User } from '../models/user.model';
import { History } from '../models/history.model';

export class Board {

     constructor(bid: number, boardName: string, swimlanes: Swimlane[], scrumMaster: User, scrumProductOwner: User, scrumTeam: User[]){
        this.boardName=boardName;
        this.bid=bid;
        this.swimlanes=swimlanes;
        this.scrumMaster=scrumMaster;
        this.scrumProductOwner=scrumProductOwner;
        this.scrumTeam = scrumTeam;
        this.burnDown = [];
     }
    bid: number;
    boardName: string;
    swimlanes: Swimlane[];
    scrumMaster: User;
    scrumProductOwner: User;
    scrumTeam: User[];
    burnDown: History[];
}

