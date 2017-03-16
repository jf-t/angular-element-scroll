interface ScrollObj {
    end: HTMLElement;
    speed?: number;
    scrollEvent?: boolean;
    clickEvent?: boolean;
    title?: string;
    offset?: number;
    delay?: number;
}

export class ElementScrollEvent {
    end: HTMLElement;
    speed: number;
    scrollEvent: boolean;
    clickEvent: boolean;
    title: string;
    offset: number;
    intId: Timer;
    delay: number;


    constructor( obj: ScrollObj ) {
        this.isEnd(obj.end);
        this.end = obj.end;
        this.speed = obj.speed ? obj.speed : 25;
        this.scrollEvent = obj.scrollEvent ? obj.scrollEvent : false;
        this.clickEvent = obj.clickEvent ? obj.clickEvent : false;
        this.title = obj.title ? obj.title : "";
        this.offset = obj.offset ? obj.offset : 0;
        this.intId = null;
        this.delay = obj.delay ? obj.delay : 0;
    }

    set(lab, val) {
        this[lab] = val;
    }

    stop() {
        clearInterval(this.intId);
    }

    private isEnd(end) {
        if (!(end instanceof HTMLElement)) {
            alert("Your end point does not exist");
        } else {
            return true;
        }
    }
}
