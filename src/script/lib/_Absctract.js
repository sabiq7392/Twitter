import { isObject } from './_Type.js';

class Mame {
    constructor(element) {
        if (this.constructor.name === 'DOM') {
            throw new TypeError(`${this.constructor.name} is abstract class!`);
        }

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

    $query(element) {
        return this._element.$query(element);
    }
}

export default Mame;
