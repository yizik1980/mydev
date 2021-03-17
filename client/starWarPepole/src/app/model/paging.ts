export default class Paging {
     pages = new Array<number>();
     current:number;
    constructor(allLength, viewedLength) {
        this.current = 1;;
        let count = 1;
        let gap = 1;
        while (allLength > gap) {
            this.pages.push(count);
            gap = viewedLength * count;
            count++;
        }
    }
    setCurrent(p:number){
        this.current = p;
    }
}