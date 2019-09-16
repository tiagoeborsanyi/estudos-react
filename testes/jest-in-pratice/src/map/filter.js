'use strict';

const filter = (arr = [], callback) => {
    for(let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
}

const teste = filter([1, 2], (value) => {
    //console.log(value > 1)
    return value > 1;
});
console.log(teste)

export default filter;