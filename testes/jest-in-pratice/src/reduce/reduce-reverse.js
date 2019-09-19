'use strict';

const isInitialValueUndefined = initialValue => initialValue === undefined

const reduce = (arr, callback, initialValue) => {
    const acc = isInitialValueUndefined(initialValue) ? arr[0] : initialValue;;
    const arrCopy = isInitialValueUndefined(initialValue) ? arr.slice(1) : arr;
    return (function reduceInternal (accinternal, arrInternal, counter) {
        const [head, ...tail] = arrInternal;
        return arrInternal.length === 0
            ? accinternal
            : reduceInternal(callback(accinternal, head, counter, arrCopy), tail, counter+1)
    })(acc, arrCopy, 0)
}

export default reduce;