// express import kar rahe hain jo ek server framework hai Node.js ke liye
import express from "express"

// cors import kar rahe hain jo Cross-Origin Resource Sharing handle karta hai
import cors from "cors" 

// cookie-parser import kar rahe hain jo request ke cookies ko read aur handle karta hai
import cookieParser  from "cookie-parser";

// express app create kar rahe hain
const app = express() ;

// cors middleware use kar rahe hain
// yaha origin env variable se aayega (CORS_ORIGIN) aur credentials allow karenge (cookies/session)
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true 
}))

// server par JSON data accept karne ke liye middleware
// limit 16kb rakhi gayi hai taaki bahut bada JSON na bheja ja sake
app.use(
    express.json({
        limit : "16kb" 
    })
)

// urlencoded data accept karne ke liye middleware
// extended:true matlab nested objects ko bhi handle karega
app.use(
    express.urlencoded({
        extended : true,
        limit : "16kb"
    })
)

// "public" folder ko static files serve karne ke liye enable kar rahe hain
// jaise images, css, js files etc.
app.use(express.static("public"))

// cookies ko parse karne ke liye middleware
app.use(cookieParser())

// app ko export kar rahe hain taaki dusre files me import karke use kiya ja sake
export {app}  
