const dotenv = require("dotenv")
const express = require("express")
const bodyParser = require("body-parser")


const app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

dotenv.config({ path: "./.env" })

require("./db/connection")

// we link router files to make our route easy
app.use(require("./router/auth"));



const Port = process.env.PORT;
app.listen(Port, () => {
    console.log(" server is running at port:", Port)
})