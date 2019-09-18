'use strict';

const every = (arr) => {
    let newArr = [];
    for(let i = arr.length; i--;) {
        newArr.push(arr[i]);
    }
    return newArr;
}

export default every;