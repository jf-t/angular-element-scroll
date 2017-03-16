import { Injectable } from '@angular/core';

import { ElementScrollEvent } from './angular-element-scroll-event';


interface ElementScrollService {
    events: Array<ElementScrollEvent>
}

@Injectable()
export class ElementScrollService {

    addEvent(elementScrollEvent: ElementScrollEvent) {
        if (events.includes(elementScrollEvent)) {
            console.log('You already added this event to the queue');
            return events.indexOf(elementScrollEvent);
        } else {
            this.events.push(elementScrollEvent);
            return events.length - 1;
        }
    }

    perform(input: any) {
        if (typeof(input) === 'ElementScrollEvent') {
            this.performNew(input);
        } else if (typeof(input) === 'number') {
            this.performStored(input)
        } else {
            console.log('Error, input not known');
        }
    }

    performStored(index: number) {
        let elementScrollEvent = events[index];
        this.runEvent(elementScrollEvent);
    }

    performNew(elementScrollEvent: ElementScrollEvent) {
        this.runEvent(elementScrollEvent);
    }

    private runEvent(event: ElementScrollEvent) {
        // this is where the logic will live
    }

}
