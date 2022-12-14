const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'A tour must have a name'],
    },
    duration: {
        type: Number,
        required: [true, 'A tour must have a duration'],
    },
    difficulty: {
        type: String,
        required: true,
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a max group size'],
    },

    price: {
        type: Number,
        required: [true, 'A tour must have a price'],
    },
    rating: {
        type: Number,
        default: 4.5,
    },
});
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
