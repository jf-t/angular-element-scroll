interface ElementScrollEvent {
    end: HTMLElement,
    speed: number,
    scrollEvent: boolean,
    clickEvent: boolean
}

export default class ElementScrollEvent {

    constructor( obj: Object ) {
        this.end = obj.end;
        this.speed = obj.speed ? obj.speed : 25;
        this.scrollEvent = obj.scrollEvent ? obj.scrollEvent : false;
        this.clickEvent = obj.clickEvent ? obj.clickEvent : false;
    }

    set(lab, val) {
        this[lab] = val;
    }
}