import { Story } from '../models/story.model';

export class Swimlane {
    sid: number;
    swimlaneName: string;
    stories: Story[];
    index: number;
    bid: number; //David

    constructor (swimlaneName: string) {
        this.sid = 0;
        this.swimlaneName = swimlaneName;
        this.stories = [];
        this.index = 0;
        this.bid = 0; //David
    }
}
