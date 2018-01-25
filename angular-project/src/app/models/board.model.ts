import { Swimlane } from './swimlane.model';
import { User } from '../models/user.model';

export class Board {

     constructor(bid: number, boardName: string, swimlanes: Swimlane[], scrumMaster: number, scrumProductOwner: number, scrumTeam: number[]){
        this.boardName=boardName;
        this.bid=bid;
        this.swimlanes=swimlanes;
        this.scrumMaster=scrumMaster;
        this.scrumProductOwner=scrumProductOwner;
        this.scrumTeam = scrumTeam;
     }
    bid: number;
    boardName: string;
    swimlanes: Swimlane[];
    scrumMaster: number;
    scrumProductOwner: number;
    scrumTeam: number[];
}

