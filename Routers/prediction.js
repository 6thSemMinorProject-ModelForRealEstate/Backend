const express = require('express')
const axios = require('axios');

const predictionRouter = express.Router();

predictionRouter.route('/predict')
.post(preditPrice);

async function preditPrice(req, res) {
    let area, noOfBedrooms, gymnasium, swimmingPool, landscapeGardens, indoorGames, sportsFacility, atm, clubhouse, security, powerbackup, carParking, liftAvailable, furnishing;
    
    if(req.body.area) {
        area = req.body.area;
    } else {
        res.status(400).json({
            status:false,
            message: 'Area is required...'
        })
        return;
    }
    
    if(req.body.noOfBedrooms) {
        noOfBedrooms = req.body.noOfBedrooms;
    } else {
        noOfBedrooms = 0;
    }

    if(req.body.gymnasium) {
        gymnasium = req.body.gymnasium;
    } else {
        gymnasium = 0;
    }

    if(req.body.swimmingPool) {
        swimmingPool = req.body.swimmingPool;
    } else {
        swimmingPool =  0;
    }

    if(req.body.landscapeGardens) {
        landscapeGardens = req.body.landscapeGardens;
    } else {
        landscapeGardens =  0;
    }

    if(req.body.indoorGames) {
        indoorGames = req.body.indoorGames;
    } else {
        indoorGames =  0;
    }
    
    if(req.body.sportsFacility) {
        sportsFacility = req.body.sportsFacility;
    } else {
        sportsFacility =  0;
    }
    
    if(req.body.atm) {
        atm = req.body.atm;
    } else {
        atm =  0;
    }

    if(req.body.clubhouse) {
        clubhouse = req.body.clubhouse;
    } else {
        clubhouse =  0;
    }

    if(req.body.security) {
        security = req.body.security;
    } else {
        security =  0;
    }

    if(req.body.powerbackup) {
        powerbackup = req.body.powerbackup;
    } else {
        powerbackup =  0;
    }

    if(req.body.carParking) {
        carParking = req.body.carParking;
    } else {
        carParking =  0;
    }

    if(req.body.liftAvailable) {
        liftAvailable = req.body.liftAvailable;
    } else {
        liftAvailable =  0;
    }

    if(req.body.furnishing) {
        furnishing = req.body.furnishing;
    } else {
        furnishing =  0;
    }

    await axios.post('https://realestatemlbackend.onrender.com/have', {
        "Area": area, 
        "No. of Bedrooms": noOfBedrooms,
        "Gymnasium": gymnasium,
        "SwimmingPool": swimmingPool,
        "LandscapedGardens": landscapeGardens,
        "IndoorGames": indoorGames,
        "SportsFacility": sportsFacility,
        "ATM": atm,
        "ClubHouse": clubhouse,
        "24X7Security": security,
        "PowerBackup": powerbackup,
        "CarParking": carParking,
        "LiftAvailable": liftAvailable,
        "furnishing": furnishing
    })
    .then(function(response){
        res.status(200).json({
            status: response.data.status,
            price: response.data.price
        })
    })
    .catch(function(error){
        res.status(400).json({
            status:false,
            error: error
        })
    })
}

module.exports = predictionRouter;