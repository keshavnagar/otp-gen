var receivedOtp = "";

//function for fetching number from the html element
function fetchPhoneNumber() {
  var phoneNumber = document.getElementById("phoneNumber").value;
  console.log(phoneNumber);
  //ab apan ek fake server banayenge :
  fetch("http://localhost:5000/send-otp", {
    // Backend URL
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phone: phoneNumber }), // Phone number backend ko bhej rahe
  })
    .then((response) => response.json()) // Response parse karna
    .then(
      (data) => {
        console.log("Full Response from Backend:", data);
        receivedOtp = data.otp;
        console.log("OTP Sent:", receivedOtp);
        verifyOtpButton.disabled = false;
      } /* Filhal fake OTP store kar rahe hai (backend yeh return karega)*/
      
    ) // OTP ka response dekhna
    .catch((error) => console.error("Error:", error)); // Error handle karna
}
// fetching input button by get element by id
var sendOtpButton = document.getElementById("sendOtpButton");
// add event listener on that button
sendOtpButton.addEventListener("click", fetchPhoneNumber);


function fetchOtp () {
    var enterOtp = document.getElementById("EnterOtp").value;
    console.log("Entered OTP:", enterOtp);
    console.log("Received OTP:", receivedOtp); 
    if (enterOtp === receivedOtp) {
        alert("✅ OTP Verified Successfully!");
    } else {
        alert("❌ Incorrect OTP. Try Again.");
    }
    verifyOtpButton.disabled = true;
}

function verifyOTP() {
    const otp = document.getElementById("otpInput").value;
    
    fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Check response in console
        alert(data.message);
    })
    .catch(error => console.error("Error:", error));
}




var verifyOtpButton = document.getElementById("verifyOtp");
verifyOtpButton.disabled = true; 
verifyOtpButton.addEventListener("click", fetchOtp)



