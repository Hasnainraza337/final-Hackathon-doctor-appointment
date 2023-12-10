const mongoose = require("mongoose")

const mongo_URL = process.env.CONNECTION_STRING
mongoose.connect(mongo_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log("connection successful")
}).catch((err) => {
    console.log("no connection")
})