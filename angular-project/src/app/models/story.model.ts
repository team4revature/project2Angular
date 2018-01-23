export class Story {
    stId: number;
    storyName: string;
    difficulty: number;

    constructor(stId: number, storyName: string, difficulty: number) {
        this.stId = stId;
        this.storyName = storyName;
        this.difficulty = difficulty; 
    }
}