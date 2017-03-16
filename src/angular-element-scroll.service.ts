import { Injectable } from '@angular/core';

import { ElementScrollEvent } from './angular-element-scroll-event';


interface ElementScrollService {
    events: Object
}

@Injectable()
export class ElementScrollService {

    addEvent(elementScrollEvent: ElementScrollEvent) {
        if (events.includes(elementScrollEvent)) {
            console.log('You already added this event to the queue');

            return events.indexOf(elementScrollEvent);
        } else {
            this.events[elementScrollEvent.title] = elementScrollEvent;
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


        /*
            How this function will work:
                1. gets the top position of the user and the event.end DOM element
                    to get the user's: window.pageYOffset
                    to get the element's: element.getBoundingClientRect()

                2. calculate distance between the two and store that as a variable

                3. create an interval using the set AngularElementScroll speed

                4. create the two events if the booleans are true:
                    scrollEvent: stop the scrolling if the user scrolls
                    clickEvent: stop the scrolling if the user clicks
                        (these both default to false)

                5. start the interval of the event with the two stop events

         */
    }

}
