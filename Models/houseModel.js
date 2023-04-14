const mongoose = require('mongoose');

const houseSchema = mongoose.Schema({
    userId:{
        type: String, 
        required: true
    }, 
    area:{
        type: Number, 
        required: true
    },
    noOfBedrooms:{
        type: Number,
        required: true
    },
    gymnasium:{
        type: Number,
        required: true
    },
    swimmingPool:{
        type: Number,
        required: true
    },
    landscapeGardens:{
        type: Number,
        required: true
    },
    indoorGames:{
        type: Number,
        required: true
    },
    sportsFacility:{
        type: Number,
        required: true
    },
    resale:{
        type: Number,
        required: true
    },
    clubhouse:{
        type: Number,
        required: true
    },
    security:{
        type: Number,
        required: true
    },
    powerbackup:{
        type: Number,
        required: true
    },
    carParking:{
        type: Number,
        required: true
    },
    joggingTrack:{
        type: Number,
        required: true
    },
    furnishing:{
        type: Number,
        required: true
    },
    location:{
        type: Number,
        required: true
    },
    city:{
        type: Number,
        required: true
    },
    rainWaterHarvesting:{
        type: Number,
        required: true
    },
    wantedPrice:{
        type: Number,
        required: true
    }, 
    predictedPrice:{
        type: Number,
        required: true 
    }
});

const houseModel = mongoose.model('Houses', houseSchema);

module.exports = houseModel;
