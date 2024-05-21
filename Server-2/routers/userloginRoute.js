const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUsers, confirmDel } = require('../controllers/userloginController');




router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/users', getUsers);
router.post('/confirmation', confirmDel);

module.exports = router;