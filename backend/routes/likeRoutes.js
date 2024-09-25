const express = require('express');
const LikeRepository = require('../repositories/likeRepository');
const LikeService = require('../services/likeService');
const LikeController = require('../controllers/likeController');

const likeRoutes = express.Router();

const likeRepository = new LikeRepository();
const likeService = new LikeService(likeRepository);
const likeController = new LikeController(likeService);

console.log('Estou no router')

likeRoutes.post("/", likeController.create);

likeRoutes.delete("/", likeController.delete);

module.exports = likeRoutes;