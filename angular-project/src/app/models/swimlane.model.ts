import { Story } from '../models/story.model';

export class Swimlane {
    sid: number;
    swimlaneName: string;
    stories: Story[];

    constructor (swimlaneName: string) {
        this.swimlaneName = swimlaneName;
    }
}
