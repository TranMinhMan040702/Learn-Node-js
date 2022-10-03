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

// 2) ROUTE HANDLERS

const getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined 1',
    });
};
const createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined 1',
    });
};
const getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined 1',
    });
};
const UpdateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined 1',
    });
};
const deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined 1',
    });
};
// 3) ROUTES
const userRouter = express.Router();

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(UpdateUser).delete(deleteUser);

// 4) START SERVER
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
