const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUsers } = require('../controllers/userloginController');




router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/users', getUsers);

module.exports = router;