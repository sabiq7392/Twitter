class Type {
    
    isString(element) {
        return typeof element === 'string';
    }

    isNumber(element) {
        return typeof element === 'number';
    }

    isObject(element) {
        return typeof element === 'object';
    }
}

const type = new Type();
export const { isString, isNumber, isObject } = type;