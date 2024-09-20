const express = require('express')
const UserRepository = require("../repositories/userRepository");
const UserService = require('../services/UserService');
const UserController = require('../controllers/userController');

const userRoutes = express.Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

console.log("cheguei no router")

userRoutes.post("/", userController.create);

module.exports = userRoutes;