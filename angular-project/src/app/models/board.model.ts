import { Swimlane } from './swimlane.model';
import { User } from '../models/user.model';

export class Board {
    bid: number;
    boardName: string;
    swimlanes: Swimlane[];
    scrumMaster: User;
    scrumProductOwner: User;
    scrumTeam: User[];

    constructor(boardName: string) {
        this.bid = 0;
        this.boardName = boardName;
        this.swimlanes = [];
        this.scrumMaster = null;
        this.scrumProductOwner = null;
        this.scrumTeam = null;
    }
}
