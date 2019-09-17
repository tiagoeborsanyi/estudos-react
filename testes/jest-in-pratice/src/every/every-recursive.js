'use strict';

const every = (arr, callback) => {
    return (function everyInternal(arrInternal, counter) {
        const [head, ...tail] = arrInternal;
        return arrInternal.length === 0
            ? true 
            : !callback(head, counter, arr)
                ? false 
                : everyInternal(tail, counter + 1)
    })(arr, 0);
}

export default every;