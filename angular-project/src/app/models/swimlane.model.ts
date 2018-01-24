import { Story } from '../models/story.model';

export class Swimlane {
    sid: number;
    swimlaneName: string;
    stories: Story[];
}