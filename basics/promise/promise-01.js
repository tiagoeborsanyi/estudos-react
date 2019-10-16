// const promise = new Promise((resolve, reject) => {
//     resolve('resolvida');
// });

// promise.then(result => console.log(result));

const fs = require('fs');

// fs.readFile('./name.json', 'utf8', (err, result) => {
//     console.log(result)
// });

const readFile = (filePath, charset) => new Promise((resolve, reject) => {
    fs.readFile(filePath, charset, (err, result) => {
        if (err) return reject(err)
        resolve(result)
    })
})

readFile('./name.json', 'utf8')
    .then(result => JSON.parse(result).age)
    .then(age => console.log(age))
    .catch(error => console.log('ERROR: ', error))