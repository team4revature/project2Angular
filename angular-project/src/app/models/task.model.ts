export class Task {
    tid: number;
    taskDesc: string;
    completed: boolean; 

    constructor(tid: number, taskDesc: string) {
        this.tid = tid;
        this.taskDesc = taskDesc;
        this.completed = false; 
    }

    setAsComplete(){
        this.completed = true; 
    }
}
