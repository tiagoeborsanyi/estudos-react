'use strict';

// const map = (arr = [], callback = item => item) => {
//     let retorno = [];
//     for(let i = 0; i < arr.length; i++) {
//       retorno.push(callback(arr[i], i, arr));
//     }
//     return retorno;
// }

const map = (arr = [], callback = item => item) => {
    if (arr.length === 0)
        return 0;
    
    const [head, ...tail] = arr;
    let retorno = [];
    console.log(tail)
    return callback(arr)
}

export default map;