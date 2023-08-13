const lunches = new Map();
let latesFlightNumber = 100;
const lunch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  lunchDate: new Date("December 27 ,2030"),
  destination: "Kepler 185F",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

lunches.set(lunch.flightNumber, lunch);

function addNewLunch(lunch) {
  latesFlightNumber++;
  lunches.set(
    latesFlightNumber,
    Object.assign(lunch, {
      flightNumber: latesFlightNumber,
      success: true,
      upcoming: true,
      customer: ["ZTM", "NASA"],
    })
  );
}

module.exports = {
  lunches,
  addNewLunch,
};
