interface ScrollObj {
    end: HTMLElement;
    speed?: number;
    scrollEvent?: boolean;
    clickEvent?: boolean;
    title?: string;
    offset?: number;
    delay?: number;
    exactSpot?: boolean;
}

export class ElementScrollEvent {
    end: HTMLElement;
    speed: number;
    scrollEvent: boolean;
    clickEvent: boolean;
    title: string;
    offset: number;
    intId: number;
    delay: number;
    exactSpot: boolean;
    [key: string]: any;


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
        this.exactSpot = obj.exactSpot ? obj.exactSpot : false;
    }

    set(lab: string, val:number) {
        this[lab] = val;
    }

    stop() {
        if (this.exactSpot) {
            window.scroll(0, window.scrollY + this.end.getBoundingClientRect().top - this.offset);
        }

        clearInterval(this.intId);
    }

    event() {
        clearInterval(this.intId);
    }

    private isEnd(end:any) {
        if (!(end instanceof HTMLElement)) {
            alert("Your end point does not exist");
        } else {
            return true;
        }
    }
}
