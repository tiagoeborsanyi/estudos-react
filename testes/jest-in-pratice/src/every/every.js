'use strict';

const every = (arr, callback) => {
    if (arr.length === 0) return true;
    for(let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false
        }
    }
    return true;
}

export default every;