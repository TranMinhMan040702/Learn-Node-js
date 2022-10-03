const express = require('express');
const fs = require('fs');
const Router = express.Router();

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

Router.route('/').get(getAllTours).post(createTour);
Router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = Router;
