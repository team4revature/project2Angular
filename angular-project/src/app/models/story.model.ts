export class User {
    id: number;
    storyName: string;
    difficulty: number;

    constructor(id: number, storyName: string, difficulty: number) {
        this.id = id;
        this.storyName = storyName;
        this.difficulty = difficulty; 
    }
}