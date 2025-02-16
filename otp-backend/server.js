const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-otp",(req,res) => {
    const {phone} = req.body;
    console.log(`otp request received for phone : ${phone}`)
    const otp = "1234";
    res.json({otp})
  
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

app.post("/verify-otp", (req, res) => {
    const {  otp } = req.body;
    if (otp === "1234") {
        res.json({ success: true, message: "congratulatoin , OTP Verified " });
    } else {
        res.json({ success: false, message: "Incorrect . Try Again." });
    }
});

