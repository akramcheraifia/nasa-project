const express = require("express");
const planetController = require("./planets.controller");
const planetRouter = express.Router();

planetRouter.get("/planets", planetController.getPlanets);

module.exports = planetRouter;
