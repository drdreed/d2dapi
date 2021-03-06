var express = require('express');
var router = express.Router();
var passport = require('passport');
const UserController = require('../controllers/user.controller');
var AuthController = require('../controllers/passportAuth.controller');

// Update group roles
router.post('/:userId/group/:groupId', AuthController.isAuthenticated, UserController.postUpdateGroupRoles);

router.get('/users', AuthController.isAuthenticated, UserController.getUsers);