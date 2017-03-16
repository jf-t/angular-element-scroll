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
         let endHeight = event.end.getBoundingClientRect();
         let change = (event.speed * -1);


         if (event.scrollEvent) {
             document.addEventListener('scroll', event.stop);
         }

         if (event.clickEvent) {
             document.addEventListener('click', event.stop);
         }

         event.intId = setInterval(() => {
             window.scroll(0, window.scrollY + change);

             if (window.scrollY === endHeight) {
                 stopEvent(event);
             }
         }, 10)
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
