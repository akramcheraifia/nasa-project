const { lunches, addNewLunch } = require("../../models/lunches.model");

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

module.exports = { getAllLunches, httpAddNewLunch };
