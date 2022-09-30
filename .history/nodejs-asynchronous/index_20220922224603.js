const fs = require("fs");
const superagent = require("superagent");
fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
  superagent
    .get(`https://dog.ceo/api/${data}/image/random`)
    .end((err, res) => {
        if (err) return console.log(err.message);
        console.log(res.body.message);

        fs.writeFile("dog-img.txt", res.body.message, (err) => {
            if (err) return console.log(err.message);
            console.log("Rondom dog image saved to file");
    });
  });
  if (err) return console.log(err.message);
  console.log(data);
});
