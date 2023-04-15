const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://hackathonIndiSafe:oPiwyS7AW1QX5vuO@cluster0.r5osd1e.mongodb.net/test"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;