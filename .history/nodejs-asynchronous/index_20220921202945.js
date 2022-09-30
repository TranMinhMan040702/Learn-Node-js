const fs = require('fs');
// const superagent = require('superagent');
fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
    superagent
    if (err) return console.log(err.message)
    console.log(data)
})