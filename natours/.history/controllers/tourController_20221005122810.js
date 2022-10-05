const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => {
    console.log(`Tour id is: ${val}`);
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'Failed',
            message: 'Invalid Id',
        });
    }
};

exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        dateRequest: req.requestTime,
        results: tours.length,
        data: {
            tours,
        },
    });
};
exports.getTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find((el) => el.id === id);
    res.status(200).json({
        status: 'success',
        data: {
            tour,
        },
    });
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