const lunches = new Map();

const lunch = {
  flightNumber: "Kepler Exploration X",
  rocket: "Explorer IS1",
  lunchDate: new Date("December 27 ,2030"),
  destination: "Kepler 185F",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

lunches.set(lunch.flightNumber, lunch);

module.exports = {
  lunches,
};
