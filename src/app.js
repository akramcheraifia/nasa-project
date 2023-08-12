const express = require("express");
const cors = require("cors");
const planetRouter = require("./routes/planets/planets.route");
const lunchesRouter = require("./routes/lunches/lunches.router");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(planetRouter);
app.use(lunchesRouter);
module.exports = app;
