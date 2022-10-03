const fs = require('fs');
const express = require('express');
const { application } = require('express');
const { request } = require('http');
const { networkInterfaces } = require('os');

const app = express();
app.use(express.json());
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours,
        },
    });
};
const getTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find((el) => el.id === id);
    if (!tour) {
        return res.status(404).json({
            status: 'Failed',
            message: 'Invalid Id',
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour,
        },
    });
};
const updateTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'Failed',
            message: 'Invalid Id',
        });
    }
    res.status(200).json({
        status: 'success',
        data: '<Update toure here....>',
    });
};
const deleteTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'Failed',
            message: 'Invalid Id',
        });
    }
    res.status(204).json({
        status: 'success',
        data: null,
    });
};
const createTour = (req, res) => {
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
};
// Read
app.get('/api/v1/tours', getAllTours);
app.get('/api/v1/tours/:id', getTour);
// Update
app.patch('/api/v1/tours/:id', updateTour);
// Delete
app.delete('/api/v1/tours/:id', deleteTour);
// Create
app.post('/api/v1/tours', createTour);

app.route('/api/v1/tours').get(getAllTours).post(createTour);
app.route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
