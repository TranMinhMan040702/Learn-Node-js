const express = require('express');
const Router = express.Router();

Router.route('/').get(getAllUsers).post(createUser);
Router.route('/:id').get(getUser).patch(UpdateUser).delete(deleteUser);
