"use strict";
var ElementScrollEvent = (function () {
    function ElementScrollEvent(obj) {
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
    ElementScrollEvent.prototype.set = function (lab, val) {
        this[lab] = val;
    };
    ElementScrollEvent.prototype.stop = function () {
        if (this.exactSpot) {
            window.scroll(0, window.scrollY + this.end.getBoundingClientRect().top - this.offset);
        }
        window.clearInterval(this.intId);
    };
    ElementScrollEvent.prototype.event = function () {
        window.clearInterval(this.intId);
    };
    ElementScrollEvent.prototype.isEnd = function (end) {
        if (!(end instanceof HTMLElement)) {
            alert("Your end point does not exist");
        }
        else {
            return true;
        }
    };
    return ElementScrollEvent;
}());
exports.ElementScrollEvent = ElementScrollEvent;
