import { ElementScrollEvent } from './angular-element-scroll-event';

interface ElementScrollService {
    queue: Array<ElementScrollEvent>
}
export class ElementScrollService {

    perform(elementScrollEvent: ElementScrollEvent) {
        this.queue.push(elementScrollEvent);

        // this is where the logic of the page scroll will live
    }

}
