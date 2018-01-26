export class Story {
    stId: number;
    storyName: string;
    difficulty: number;

    constructor(storyName: string, difficulty: number) {
        this.stId = 0;
        this.storyName = storyName;
        this.difficulty = difficulty;
    }
}
