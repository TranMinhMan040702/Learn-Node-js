const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(UpdateUser).delete(deleteUser);

module.exports = router;
