const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://hackathon:gHogm5U2CaGx49lY@cluster0.bmfcz65.mongodb.net/test"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;