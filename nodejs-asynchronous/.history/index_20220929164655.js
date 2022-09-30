const fs = require("fs");
const superagent = require("superagent");
// fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
//   superagent
//     .get(`https://dog.ceo/api/${data}/image/random`)
//     .end((err, res) => {
//         if (err) return console.log(err.message);
//         console.log(res.body.message);

//         fs.writeFile("dog-img.txt", res.body.message, (err) => {
//             if (err) return console.log(err.message);
//             console.log("Rondom dog image saved to file");
//     });
//   });
//   if (err) return console.log(err.message);
//   console.log(data);
// });

// use promises
const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) return reject('I could not find that file');
            resolve(data);
        })
    })
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) return reject('Could not write file');
            resolve(data);
        })
    })
}
fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
    if (err) return console.log(err.message);
    superagent.get(`https://dog.ceo/api/${data}/image/random`)
    .then(res => {
        console.log(res.body.message);
        fs.writeFile('dog-img.txt', res.body.message, err => {
            if (err) return console.log(err.message);
            console.log('Rondom dog image saved to file!');
        });
    }).catch(err => {
        console.log(err.message);
    })
})
