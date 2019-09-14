'use strict';

const map = (arr = [], callback = item => item) => {
    let retorno = [];
    for(let i = 0; i < arr.length; i++) {
      retorno.push(callback(arr[i], i, arr));
    }
    return retorno;
}

export default map;