const express = require('express');
const Router = express.Router();

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

Router.route('/').get(getAllUsers).post(createUser);
Router.route('/:id').get(getUser).patch(UpdateUser).delete(deleteUser);
