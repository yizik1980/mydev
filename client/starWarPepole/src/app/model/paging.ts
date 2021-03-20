export default class Paging {
    pages = new Array<number>();
    current: number;
    before: number;
    after: number;
    topLimit:number;
    constructor(allLength, viewedLength) {
        this.current = 1;
        this.after = 2;
        this.before = 0;
        this.topLimit = Math.ceil(allLength/viewedLength);
        let count = 1;
        let gap = 1;
        while (allLength > gap) {
            this.pages.push(count);
            gap = viewedLength * count;
            count++;
        }
    }
    setCurrent(p: number) {
        if (p > 1) {
            this.before = p - 1;
        }
        this.current = p;
        if (p <= this.topLimit) {
            this.after = p + 1;
        }
    }
}