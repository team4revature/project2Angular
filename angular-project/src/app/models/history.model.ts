
export class History {

    hid: number;
    key: Date;
    value: number;
    bid: number;


    constructor(key: Date, value: number, bid: number) {
        this.key = key;
        this.value = value;
        this.bid = bid;
    }

}
