const fs = require('fs');
const express = require('express');
const { application } = require('express');

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

app.post('/api/v1/tours', (req, res) => {
    const idTour = tours[tours.length - 1].id + 1;
    const nextTour = Object.assign({ id: idTour });
    nextTour.push(req.body);

    console.log(nextTour);
    res.send('Done');
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
