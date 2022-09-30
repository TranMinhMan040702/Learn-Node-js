const fs = require('fs');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
    if (err) return console.log(err.message)
    console.log(data)
})