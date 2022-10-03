const express = require('express');
const Router = express.Router();

Router.route('/').get(getAllTours).post(createTour);
Router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);
