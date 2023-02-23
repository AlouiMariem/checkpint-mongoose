
const express = require("express");

const app = express();
const connectDB = require("./config/db");
const blogRoute = require("./routes/blog");


const port = 7000;

app.use(express.json()); 

connectDB();
app.use("/api/blog", blogRoute);

app.listen(port,()=>console.log(`app is working on port ${port}`));;