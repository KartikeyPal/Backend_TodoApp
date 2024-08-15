const express = require('express');
const app = express();

//load config from env
require("dotenv").config();
const PORT  = process.env.port|| 4000;

//middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos")

//mount the todo ASPI routes
app.use("/api/v1",todoRoutes);

//start the server
app.listen(PORT,()=>{
   console.log(`server started successfully at port ${PORT}`);    
})

const dbConnect = require("./config/database")
dbConnect();

//default Route
app.get("/",(req,res)=>{
   res.send(`<h1>this is Homepage </h1>`)
})
