'use strict';

const find = (arr, callback) => {
    return (function findInternal(arrInternal, counter) {
        const [head, ...tail] = arrInternal;
        return arrInternal === 0
            ? undefined
            : callback(head, counter, arr)
                ? head
                : findInternal(tail, counter+1)
    })(arr, 0);
}

export default find;