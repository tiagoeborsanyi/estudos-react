const fs = require('fs');

const readFile = (filePath, charset) => new Promise((resolve, reject) => {
    fs.readFile(filePath, charset, (err, result) => {
        if (err) return reject(err)
        resolve(result)
    })
})

readFile('./name.json', 'utf8')
    // .then(result => JSON.parse(result).age)
    // .then(age => console.log(age))
    // .catch(error => console.log('ERROR: ', error))

const read = async () => {
    // const result = await readFile('./name.json', 'utf8')
    // console.log('ASYNC: ', result)
    
    setTimeout(async () => {
        const result = await readFile('./name.json', 'utf8')
        console.log('ASYNC: ', result)
    }, 2000)
}

read()