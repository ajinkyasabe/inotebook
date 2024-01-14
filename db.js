const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://sabeajinkya:raju1234@cluster0.k7pf0fg.mongodb.net/inotebook?retryWrites=true&w=majority"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;