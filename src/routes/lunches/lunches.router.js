const express = require("express");
const {
  getAllLunches,
  httpAddNewLunch,
  httpAbortLunch,
} = require("./lunches.controller");
const lunchesRouter = express.Router();

lunchesRouter.get("/", getAllLunches);
lunchesRouter.post("/", httpAddNewLunch);
lunchesRouter.delete("/:id", httpAbortLunch);
module.exports = lunchesRouter;
