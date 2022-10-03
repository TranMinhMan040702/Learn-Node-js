const express = require('express');
const router = express.Router();

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

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(UpdateUser).delete(deleteUser);

module.exports = router;
