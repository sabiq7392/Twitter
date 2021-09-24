import { isObject } from './_Type.js';
'use strict';

class DomSuper {
    constructor(element) {
        this._element = element;
    }

    $(element) {
        if (!isObject(element)) {
            const isID = element.includes('#')
            if (!(isID)) {
                return document.querySelectorAll(element);
            }

            return document.querySelector(element);
        }

        const allowJustOneValue = element.length > 1;
        if (allowJustOneValue) {
            throw new RangeError(`Your array length is ${element.length}. Can't install more than 1 value`)
        } 

        return this._element.$(element);
    }
}

export default DomSuper;
