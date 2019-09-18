'use strict';

const reduce = (arr, callback, initialValue) => {
    let acc = initialValue;
    let arrCopy = arr;
    if (initialValue === undefined) {
        acc = arr[0];
        arrCopy = arr.slice(1);
    }
    for(let i = 0; i < arrCopy.length; i++) {
        acc = callback(acc, arrCopy[i], i)
    }
    return acc;
}

export default reduce;