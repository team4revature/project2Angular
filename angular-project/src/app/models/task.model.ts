export class Task {
    stId: number;
    content: string;
    isComplete: boolean; 

    constructor(stId: number, content: string) {
        this.stId = stId;
        this.content = content;
        this.isComplete = false; 
    }

    setAsComplete(){
        this.isComplete = true; 
    }
}
