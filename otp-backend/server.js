const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-otp",(req,res) => {
    const {phone} = req.body;
    console.log("otp request received for phone : ${phone}")

    const otp = Math.floor()
})
