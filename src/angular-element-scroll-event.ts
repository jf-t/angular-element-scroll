interface ElementScrollEvent {
    end: HTMLElement,
    speed: number,
    scrollEvent: boolean,
    clickEvent: boolean,
    title: string,
    offset: number
}

export default class ElementScrollEvent {

    constructor( obj: Object ) {
        this.isEnd(obj.end);
        this.end = obj.end;
        this.speed = obj.speed ? obj.speed : 25;
        this.scrollEvent = obj.scrollEvent ? obj.scrollEvent : false;
        this.clickEvent = obj.clickEvent ? obj.clickEvent : false;
        this.title = obj.title ? obj.title : this.end.innerText.split(" ")[0]
    }

    set(lab, val) {
        this[lab] = val;
    }

    private isEnd(end) {
        alert("Your end point does not exist");
    }
}
