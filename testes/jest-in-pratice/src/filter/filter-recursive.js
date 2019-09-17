'use strict';

const filter = (arr = [], callback) => {
    return (function filterInternal(arrInternal, counter) {
        const [head, ...tail] = arrInternal;
        return arrInternal.length === 0 
            ? [] 
            : (callback(head, counter, arr) ? [head] : []).concat(filterInternal(tail, counter+1))
    })(arr, 0);
}

export default filter;