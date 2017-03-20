"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ElementScrollService = (function () {
    function ElementScrollService() {
        this.events = [];
    }
    ElementScrollService.prototype.addEvent = function (elementScrollEvent) {
        if (this.eventsIndex(elementScrollEvent) !== -1) {
            return this.eventsIndex(elementScrollEvent);
        }
        else {
            this.events.push(elementScrollEvent);
            return (this.events.length - 1);
        }
    };
    ElementScrollService.prototype.perform = function (input) {
        this.performStored(input);
    };
    ElementScrollService.prototype.performStored = function (index) {
        var elementScrollEvent = this.events[index];
        this.runDelay(elementScrollEvent);
    };
    ElementScrollService.prototype.performNew = function (elementScrollEvent) {
        this.runDelay(elementScrollEvent);
    };
    ElementScrollService.prototype.runDelay = function (event) {
        var _this = this;
        setTimeout(function () { return _this.runEvent(event); }, event.delay);
    };
    ElementScrollService.prototype.runEvent = function (event) {
        var _this = this;
        if (event.end.getBoundingClientRect().top === 0) {
            this.runDelay(event);
            return false;
        }
        var endHeight = event.end.getBoundingClientRect().top;
        var change = (event.speed);
        var down;
        if (endHeight > 0) {
            down = true;
        }
        else {
            change *= -1;
            down = false;
        }
        if (event.scrollEvent) {
            document.addEventListener('mousewheel', event.event.bind(event));
        }
        if (event.clickEvent) {
            document.addEventListener('click', event.event.bind(event));
        }
        var scrollY = 0;
        event.intId = window.setInterval(function () {
            window.scroll(0, window.scrollY + change);
            scrollY += change;
            if (down) {
                if (scrollY >= (endHeight - event.offset)) {
                    _this.stopEvent(event);
                }
            }
            else {
                if (scrollY <= (endHeight - event.offset)) {
                    _this.stopEvent(event);
                }
            }
        }, 10);
    };
    ElementScrollService.prototype.stopEvent = function (event) {
        event.stop();
        if (event.scrollEvent) {
            document.removeEventListener('mousewheel', event.event.bind(event));
        }
        if (event.clickEvent) {
            document.removeEventListener('click', event.event.bind(event));
        }
    };
    ElementScrollService.prototype.eventsIndex = function (event) {
        var flag = -1;
        this.events.forEach(function (scrollEvent, idx) {
            if (scrollEvent.end === event.end) {
                flag = idx;
            }
        });
        return flag;
    };
    return ElementScrollService;
}());
ElementScrollService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ElementScrollService);
exports.ElementScrollService = ElementScrollService;
