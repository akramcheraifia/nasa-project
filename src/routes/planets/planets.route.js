const express = require("express");
const planetController = require("./planets.controller");
const planetRouter = express.Router();

planetRouter.get("/", planetController.getPlanets);

module.exports = planetRouter;
