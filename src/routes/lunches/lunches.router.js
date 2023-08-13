const express = require("express");
const { getAllLunches, httpAddNewLunch } = require("./lunches.controller");
const lunchesRouter = express.Router();

lunchesRouter.get("/", getAllLunches);
lunchesRouter.post("/", httpAddNewLunch);
module.exports = lunchesRouter;
