const {
  lunches,
  addNewLunch,
  isLunchExist,
  abortLunchById,
} = require("../../models/lunches.model");

function getAllLunches(req, res) {
  return res.status(200).json(Array.from(lunches.values()));
}
function httpAddNewLunch(req, res) {
  const newLunch = req.body;

  if (
    !newLunch.mission ||
    !newLunch.destination ||
    !newLunch.rocket ||
    !newLunch.lunchDate
  ) {
    return res.status(400).json({
      error: "missing required property",
    });
  }

  newLunch.lunchDate = new Date(newLunch.lunchDate);
  if (isNaN(newLunch.lunchDate)) {
    return res.status(400).json({
      error: "invalid date",
    });
  }
  addNewLunch(newLunch);
  return res.status(201).json(newLunch);
}

function httpAbortLunch(req, res) {
  const lunchId = Number(req.params.id);
  if (!isLunchExist(lunchId)) {
    return res.status(404).json({
      error: "lunch dosent exist",
    });
  }
  const aborted = abortLunchById(lunchId);
  return res.status(200).json(aborted);
}

module.exports = { getAllLunches, httpAddNewLunch, httpAbortLunch };
