const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'A tour must have a name'],
        trim: true,
    },
    duration: {
        type: Number,
        required: [true, 'A tour must have a duration'],
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a max group size'],
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty'],
    },
    ratingsAverage: {
        type: Number,
        default: 4.5,
    },
    ratingsQuantity: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price'],
    },
    summary: {
        type: String,
        trim: true,
        required: [true, 'A tour must have a summary'],
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'A tour must have a description'],
    },
    imageCover: {
        type: String,
        required: [true, 'A tour must have a image cover'],
    },
    images: [String],
});
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
