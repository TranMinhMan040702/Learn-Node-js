const fs = require('fs');
const express = require('express');
const { application } = require('express');
const { request } = require('http');
const { networkInterfaces } = require('os');

const app = express();
app.use(express.json());

// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: 'Hello from the server side !',
//         app: 'Natours',
//     });
// });

// app.post('/', (req, res) => {
//     res.send('You can post endpoint....');
// });
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours,
        },
    });
});

app.get('/api/v1/tours/:id', (req, res) => {
    console.log(req.params);
    res.status(200).send('Done');
});

app.post('/api/v1/tours', (req, res) => {
    const idTour = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: idTour }, req.body);
    tours.push(newTour);
    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        (err) => {
            res.status(201).json({
                status: 'success',
                data: {
                    tour: newTour,
                },
            });
        }
    );
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
