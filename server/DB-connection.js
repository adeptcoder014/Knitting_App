const mongoose = require("mongoose");

const DB_url = "mongodb+srv://User_369:TonyStark007@cluster0.37ajaix.mongodb.net/Knitting_App?retryWrites=true&w=majority"

mongoose.connect(DB_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Ho gaya Mongo se connection !")})
    