const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());


let otpStorage = {}; 

app.post("/send-otp", (req, res) => {
    const { phone } = req.body;
    console.log(`OTP request received for phone: ${phone}`);
    
    const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Random 4-digit OTP
    console.log(`Generated OTP: ${otp}`);

    otpStorage[phone] = otp; // OTP store karna

    // ✅ Sirf ek hi response bhejna
    res.json({ otp }); // Frontend ko actual OTP bhejna (Testing ke liye abhi visible hai)
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

app.post("/verify-otp", (req, res) => {
    const { phone ,  otp } = req.body;
    if (otpStorage[phone] && otpStorage[phone] === otp) {
        res.json({ success: true, message: "congratulatoin , OTP Verified " });
    } else {
        res.json({ success: false, message: "Incorrect . Try Again." });
    }
});

