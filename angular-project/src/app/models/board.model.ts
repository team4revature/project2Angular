import { Swimlane } from './swimlane.model';
import { User } from '../models/user.model';

export class Board {
    bid: number;
    boardName: string;
    swimlanes: Swimlane[];
    scrumMaster: User;
    scrumProductOwner: User;
    scrumTeam: User;

    constructor(boardName: string) {
        this.boardName = boardName;
    }
}
