🎯fetch() ki need isliye padi kyuki isse apna data ayega aur jayega 

🎯jaise phone number apan bhejenge 
and otp apan lenge

🎯fetch(URL, {
    method: "POST",  // Ya "GET"
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: value })
})
.then(response => response.json())  // Response ko JSON me convert karna
.then(data => { console.log(data); })  // Server ka response dekhna
.catch(error => { console.error(error); });  // Agar error aaye

🎯 Ab Breakdown: 

1️⃣ fetch("URL", options) kya hai?

🎯 ab jo fetch hai vo server par request bhejta hai. 

🎯 jaise isme URL : vo address hai jispe apan request bhejenge 

🎯 options : ye batayega request ka type kya hai get or post.

👀 Example:

fetch("https://jsonplaceholder.typicode.com/posts",{..})

Yeh ek fake backend hai jo testing ke liye kaam karega.

2️⃣ method: "POST" kya karta hai?

get  →  data lena 
post  →  data bhejna 

 → jaise hame phone number bhejna hai to ham 

 → post method use karenge : 

3️⃣ headers: {"Content-Type": "application/json"}

ye server ko batata hai ki ham data ko json format me post kar rahe hai 

headers: { "Content-Type": "application/json" }

4️⃣ body: JSON.stringify({ phone: phoneNumber })

JSON.stringify() ka use hota hai object ko JSON format me convert karne ke liye

Hum phoneNumber bhej rahe hain

body: JSON.stringify({ phone: phoneNumber })

5️⃣ then(response => response.json())

Jab request successful hoti hai to server ek response bhejta hai

.json() ka use hota hai response ko JSON format me convert karne ke liye

.then(response => response.json())

6️⃣ then(data => console.log(data))

Yeh server ka response console me print karega

.then(data => { console.log("Server Response:", data); })

7️⃣ catch(error => console.error(error))

Agar koi error aaye to yeh usko pakad lega

.catch(error => { console.error("Error:", error); });

