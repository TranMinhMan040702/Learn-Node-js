const express = require('express');
const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(UpdateUser).delete(deleteUser);

module.exports = router;
