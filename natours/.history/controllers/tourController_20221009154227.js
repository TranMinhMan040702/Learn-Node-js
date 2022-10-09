const Tour = require('../models/tourModel.js');

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(404).json({
            status: 'fail',
            Message: 'Missing name or price',
        });
    }
    next();
};

exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        dateRequest: req.requestTime,
        // results: tours.length,
        // data: {
        //     tours,
        // },
    });
};
exports.getTour = (req, res) => {
    // const id = req.params.id * 1;
    // const tour = tours.find((el) => el.id === id);
    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         tour,
    //     },
    // });
};
exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: '<Update toure here....>',
    });
};
exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null,
    });
};
exports.createTour = (req, res) => {
    res.status(201).json({
        status: 'success',
        data: {
            // tour: newTour,
        },
    });
};
