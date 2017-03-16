import { Injectable } from '@angular/core';

import { ElementScrollEvent } from './angular-element-scroll-event';

@Injectable()
export class ElementScrollService {
    events: Object;

    constructor() {
        this.events = {};
    }

    addEvent(elementScrollEvent: ElementScrollEvent) {
        if (this.events[elementScrollEvent.title]) {
            console.log('You already added this event to the queue');
        } else {
            this.events[elementScrollEvent.title] = elementScrollEvent;
        }
        return elementScrollEvent.title;
    }


    perform(input: any) {
        if (typeof(input) === 'ElementScrollEvent') {
            this.performNew(input);

        } else if (typeof(input) === 'string') {
            this.performStored(input)
        } else {
            console.log('Error, input not known');
        }
    }


    performStored(index: string) {
        let elementScrollEvent = this.events[index];
        this.runEvent(elementScrollEvent);
    }


    performNew(elementScrollEvent: ElementScrollEvent) {
        this.runEvent(elementScrollEvent);
    }


    private runEvent(event: ElementScrollEvent) {
        let endHeight = event.end.getBoundingClientRect().top;
        let change = (event.speed);

        //  gets if page needs to go up or down
        let up: boolean;
        if (endHeight > window.scrollY) {
            up = true;
        } else {
            up = false;
        }

        if (event.scrollEvent) {
            document.addEventListener('scroll', event.stop);
        }

        if (event.clickEvent) {
            document.addEventListener('click', event.stop);
        }

        event.intId = setInterval(() => {
            window.scroll(0, window.scrollY + change);
            if (up) {
                if (window.scrollY >= (endHeight + event.offset)) {
                    this.stopEvent(event);
                }
            } else {
                if (window.scrollY <= (endHeight + event.offset)) {
                    this.stopEvent(event);
                }
            }
        }, 10);
    }

    private stopEvent(event) {
        event.stop();

        if (event.scrollEvent) {
            document.removeEventListener('scroll', event.stop);
        }
        if (event.clickEvent) {
            document.removeEventListener('click', event.stop);
        }
    }

}
