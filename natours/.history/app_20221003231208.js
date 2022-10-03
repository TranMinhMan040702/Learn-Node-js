const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

// 1)MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toLocaleTimeString();
    next();
});

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// 2) ROUTE HANDLERS
const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        dateRequest: req.requestTime,
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
// 3) ROUTES
app.route('/api/v1/tours').get(getAllTours).post(createTour);
app.route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

app.route('/api/v1/users').get(getAllUsers).post(createUser);
app.route('/api/v1/user/:id').get(getUser).path(UpdateUser).delete(deleteUser);
// 4) START SERVER
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
