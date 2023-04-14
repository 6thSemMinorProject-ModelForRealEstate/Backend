const axios = require("axios");

async function preditPrice(req, res) {
  let area,
    noOfBedrooms,
    gymnasium,
    swimmingPool,
    landscapeGardens,
    indoorGames,
    sportsFacility,
    resale,
    clubhouse,
    security,
    powerbackup,
    carParking,
    joggingTrack,
    rainWaterHarvesting,
    city,
    location,
    furnishing;

  if (req.body.area) {
    area = req.body.area;
  } else {
    res.status(400).json({
      status: false,
      message: "Area is required...",
    });
    return;
  }

  if (req.body.noOfBedrooms) {
    noOfBedrooms = req.body.noOfBedrooms;
  } else {
    noOfBedrooms = 0;
  }

  if (req.body.gymnasium) {
    gymnasium = req.body.gymnasium;
  } else {
    gymnasium = 0;
  }

  if (req.body.swimmingPool) {
    swimmingPool = req.body.swimmingPool;
  } else {
    swimmingPool = 0;
  }

  if (req.body.landscapeGardens) {
    landscapeGardens = req.body.landscapeGardens;
  } else {
    landscapeGardens = 0;
  }

  if (req.body.indoorGames) {
    indoorGames = req.body.indoorGames;
  } else {
    indoorGames = 0;
  }

  if (req.body.sportsFacility) {
    sportsFacility = req.body.sportsFacility;
  } else {
    sportsFacility = 0;
  }

  if (req.body.resale) {
    resale = req.body.resale;
  } else {
    resale = 0;
  }

  if (req.body.clubhouse) {
    clubhouse = req.body.clubhouse;
  } else {
    clubhouse = 0;
  }

  if (req.body.security) {
    security = req.body.security;
  } else {
    security = 0;
  }

  if (req.body.powerbackup) {
    powerbackup = req.body.powerbackup;
  } else {
    powerbackup = 0;
  }

  if (req.body.carParking) {
    carParking = req.body.carParking;
  } else {
    carParking = 0;
  }

  if (req.body.liftAvailable) {
    liftAvailable = req.body.liftAvailable;
  } else {
    liftAvailable = 0;
  }

  if(req.body.joggingTrack) {
    joggingTrack = req.body.joggingTrack;
  } else {
    joggingTrack = 0;
  }

  if(req.body.rainWaterHarvesting) {
    rainWaterHarvesting = req.body.rainWaterHarvesting 
  } else {
    rainWaterHarvesting = 0;
  }

  if(req.body.city) {
    city = req.body.city
  } else {
    city = 0;
  }

  if(req.body.location) {
    location = req.body.location
  } else {
    location = 0;
  }

  if (req.body.furnishing) {
    furnishing = req.body.furnishing;
  } else {
    furnishing = 0;
  }

  let washingMachine = 0,
    gasConnection = 0,
    ac = 0,
    childrenArea = 0,
    bed = 0,
    tv = 0,
    dinningTable = 0,
    sofa = 0,
    refrigerator = 0;

  if (furnishing >= 1) {
    washingMachine = 1;
    gasConnection = 1;
    bed = 1;
    childrenArea = 1;
    if (furnishing == 2) {
      tv = 1;
      dinningTable = 1;
      sofa = 1;
      refrigerator = 1;
      ac = 1;
    }
  }

  await axios
    .post("https://realestate-ml-backend.onrender.com/have", {
      "Area": area,
      "Location": location,
      "No. of Bedrooms": noOfBedrooms,
      "Resale": resale,
      "Gymnasium": gymnasium,
      "SwimmingPool": swimmingPool,
      "LandscapedGardens": landscapeGardens,
      "JoggingTrack": joggingTrack,
      "RainWaterHarvesting": rainWaterHarvesting,
      "IndoorGames": indoorGames,
      "SportsFacility": sportsFacility,
      "ClubHouse": clubhouse,
      "24X7Security": security,
      "PowerBackup": powerbackup,
      "CarParking": carParking,
      "WashingMachine": washingMachine,
      "Gasconnection": gasConnection,
      "AC": ac,
      "Children'splayarea": childrenArea,
      "BED": bed,
      "TV": tv,
      "DiningTable": dinningTable,
      "Sofa": sofa,
      "Refrigerator": refrigerator,
      "City": city,
    })
    .then(function (response) {
      res.status(200).json({
        status: response.data.status,
        price: response.data.price,
      });
    })
    .catch(function (error) {
      res.status(400).json({
        status: false,
        error: error,
      });
    });
}

module.exports = preditPrice;
