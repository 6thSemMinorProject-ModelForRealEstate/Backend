const express = require('express')

const houseModel = require('../Models/houseModel');

const houseRouter = express.Router();

houseRouter.route('/availableHouses')
.post(addNewHouse)
.get(allAvailableHouses);


async function addNewHouse(req, res) {
    let houseData = req.body;
    let house = await houseModel.create(houseData);
    
    res.status(200).json({
        message:"Success..",
        house: house
    })
}

async function allAvailableHouses(req, res) {
    let result = await houseModel.find();
    
    return res.json({
        message: "Success..",
        houses: result
    })
}

module.exports = houseRouter;