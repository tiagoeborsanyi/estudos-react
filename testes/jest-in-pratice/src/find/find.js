'use strict';

const find = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}

export default find;