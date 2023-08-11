const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const habitabblePlanets = [];
const csvFilePath = path.join(__dirname, "../../data/kepler_data.csv");

function isHabitabble(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
function loadPlanets() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", function (data) {
        if (isHabitabble(data) === true) habitabblePlanets.push(data);
      })
      .on("error", function (err) {
        console.log(err);
        reject(err);
      })
      .on("end", function () {
        console.log("done");
        console.log(`there is ${habitabblePlanets.length}`);
        resolve();
      });
  });
}

module.exports = {
  loadPlanets,
  planets: habitabblePlanets,
};
