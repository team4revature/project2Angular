import { Task } from "./task.model";

export class Story {
    stId: number;
    storyName: string;
    difficulty: number;
    tasks: Task[] = []; 

    constructor(stId: number, storyName: string, difficulty: number) {
        this.stId = stId;
        this.storyName = storyName;
        this.difficulty = difficulty;
    }
}