import { Board } from '../models/board.model';

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
    boards: Board[];

    constructor(id: number, username: string, password: string, email: string,
        firstname: string, lastname: string, boards: Board[]) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.boards = boards;
    }
}
