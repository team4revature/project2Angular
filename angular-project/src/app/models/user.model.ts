import { Board } from '../models/board.model';

export class User {
    uid: number;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    boards: Board[];

    constructor(uid: number, username: string, password: string, email: string,
        firstname: string, lastname: string, boards: Board[]) {
        this.uid = uid;
        this.username = username;
        this.email = email;
        this.firstName = firstname;
        this.lastName = lastname;
        this.boards = boards;
    }
}
