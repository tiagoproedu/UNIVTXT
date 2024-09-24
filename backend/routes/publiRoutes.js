const express = require('express');
const PubliRepository = require('../repositories/publiRepository');
const PubliService = require('../services/publiService');
const PubliController = require('../controllers/publiController');

const publiRoutes = express.Router();

const publiRepository = new PubliRepository();
const publiService = new PubliService(publiRepository);
const publiController = new PubliController(publiService);

console.log('Estou no router');

publiRoutes.post("/", publiController.create);

module.exports = publiRoutes;