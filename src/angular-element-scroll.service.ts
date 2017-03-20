import { Injectable } from '@angular/core';

import { ElementScrollEvent } from './angular-element-scroll-event';

@Injectable()
export class ElementScrollService {
    events: Array<ElementScrollEvent>;

    constructor() {
        this.events = [];
    }

    addEvent(elementScrollEvent: ElementScrollEvent) {
        if (this.eventsIndex(elementScrollEvent) !== -1) {
            return this.eventsIndex(elementScrollEvent);
        } else {
            this.events.push(elementScrollEvent);
            return (this.events.length - 1);
        }
    }


    perform(input: any) {
        // let inputType = typeof(input);
        // if (inputType === 'ElementScrollEvent') {
        //     this.performNew(input);
        // } else if (inputType === 'number') {
        //     this.performStored(input)
        // } else {
        //     console.log('Error, input not known');
        // }

        this.performNew(input);
    }


    performStored(index: number) {
        let elementScrollEvent = this.events[index];
        this.runDelay(elementScrollEvent);
    }


    performNew(elementScrollEvent: ElementScrollEvent) {
        this.runDelay(elementScrollEvent);
    }

    private runDelay(event:ElementScrollEvent) {
        setTimeout(() => this.runEvent(event), event.delay);
    }


    private runEvent(event: ElementScrollEvent) {
        if (event.end.getBoundingClientRect().top === 0) {
            this.runDelay(event);
            return false;
        }

        let endHeight = event.end.getBoundingClientRect().top;
        let change = (event.speed);

        //  gets if page needs to go up or down
        let down: boolean;
        if (endHeight > 0) {
            down = true;
        } else {
            change *= -1;
            down = false;
        }

        if (event.scrollEvent) {
            document.addEventListener('mousewheel', event.event.bind(event));
        }

        if (event.clickEvent) {
            document.addEventListener('click', event.event.bind(event));
        }

        let scrollY = 0;
        event.intId = window.setInterval(() => {
            window.scroll(0, window.scrollY + change);
            scrollY += change;

            if (down) {
                if (scrollY >= (endHeight - event.offset)) {
                    this.stopEvent(event);
                }
            } else {
                if (scrollY <= (endHeight - event.offset)) {
                    this.stopEvent(event);
                }
            }
        }, 10);
    }

    private stopEvent(event: ElementScrollEvent) {
        event.stop();
        if (event.scrollEvent) {
            document.removeEventListener('mousewheel', event.event.bind(event));
        }
        if (event.clickEvent) {
            document.removeEventListener('click', event.event.bind(event));
        }
    }

    private eventsIndex(event: ElementScrollEvent) {
        let flag: number = -1;

        this.events.forEach((scrollEvent, idx) => {
            if (scrollEvent.end === event.end) {
                flag = idx;
            }
        });

        return flag;
    }

}
