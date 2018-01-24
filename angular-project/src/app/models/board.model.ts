import { Swimlane } from './swimlane.model';
import { User } from '../models/user.model';

export class Board {
    bid: number;
    boardName: string;
    swimlanes: Swimlane[];
    scrumMaster: User;
    scrumProductOwner: User;
    scrumTeam: User;

    constructor(bid: number, boardName: string, swimlanes: Swimlane[],
        scrumMaster: User, scrumProductOwner: User, scrumTeam: User) {
            this.bid = bid;
            this.boardName = boardName;
            this.swimlanes = swimlanes;
            this.scrumMaster = scrumMaster;
            this.scrumProductOwner = scrumProductOwner;
            this.scrumTeam = scrumTeam;
    }
}
